/* Copyright (C) Canis Solutions Pvt Ltd - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Version 1.0.4
 */

/* Change Log
 * 1.0.3
 * - Check existing premissions
 * - Change logo location
 * 1.0.4
 * - Check Service Worker State Change
 */

CH_WPUSH_API = "https://wpush.ch-api.com";
CH_PUB_VAPID_KEY = 'BKKr96VAN8e0_NTZNg3zMfdcUGYWD-lieOl7bJ2ikdwYpU8PfnNW9Pcpa8srLaO78OA8y5eMFxBlPnilJVW4Rjs';
CH_WPUSH_REASK_PREMISSION_MINUTES = 2880
CH_WPUSH_PROMPT_INTERVAL_SECONDS = 5

function ch_wpush_allow_button_click() {
    ch_session('', (success, session_params) => {
        var wpush_c_data = {
            hostname: window.location.hostname,
            user_id: session_params.user_id,
            action: 'allow',
            created_at: new Date(),
            updated_at: new Date()
        }
        ch_set_c(ch_location_key_gen()(window.location.origin + '_wpush'), JSON.stringify(wpush_c_data), CH_COOKIE_EXP)
    })
    if ('serviceWorker' in navigator) {
        window.Notification.requestPermission().then(function(result) {
            if (result == 'granted') {
                ch_session('', (success, session_params) => {
                    ch_sw_run(session_params.user_id);
                })
            } else if (result == 'denied') {
                ch_set_c(ch_location_key_gen()(window.location.origin + '_wpush'), "", CH_COOKIE_EXP)
            }
        });
    }
    let ch_prompt_element = document.getElementById("canishub-wpush-subscription-prompt");
    ch_prompt_element.style.display = "none";
}

function ch_wpush_later_button_click() {
    ch_session('', (success, session_params) => {
        var wpush_c_data = {
            hostname: window.location.hostname,
            user_id: session_params.user_id,
            action: 'later',
            created_at: new Date(),
            updated_at: new Date()
        }
        ch_set_c(ch_location_key_gen()(window.location.origin + '_wpush'), JSON.stringify(wpush_c_data), CH_COOKIE_EXP)
    })
    let ch_prompt_element = document.getElementById("canishub-wpush-subscription-prompt");
    ch_prompt_element.style.display = "none";
}


async function ch_sw_run(user_id) {
    navigator.serviceWorker.register('/apps/sw/ch_worker.js', {
        scope: "/apps/sw/"
    }).then(function(reg) {
            var serviceWorker;
            if (reg.installing) {
                serviceWorker = reg.installing;
            } else if (reg.waiting) {
                serviceWorker = reg.waiting;
            } else if (reg.active) {
                serviceWorker = reg.active;
            }

            if (serviceWorker) {
                if (serviceWorker.state == "activated") {}
                serviceWorker.addEventListener("statechange", function(e) {
                    if (e.target.state == "activated") {
                        reg.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: urlBase64ToUint8Array(CH_PUB_VAPID_KEY)
                        }).then(function(subscription) {
                            let ch_wpush_c = ch_get_c(ch_location_key_gen()(window.location.origin + '_wpush'));
                            fetch(CH_WPUSH_API + '/subscribeuser?user_id=' + user_id, {
                                method: 'POST',
                                body: JSON.stringify(subscription),
                                headers: {
                                    'content-type': 'application/json'
                                }
                            }).then(res => {
                                var wpush_c_data = {
                                    hostname: window.location.hostname,
                                    user_id: user_id,
                                    subscription: subscription,
                                    created_at: new Date(),
                                    updated_at: new Date()
                                }
                                ch_set_c(ch_location_key_gen()(window.location.origin + '_wpush'), JSON.stringify(wpush_c_data), CH_COOKIE_EXP)
                            }).catch(err => {});
                        });
                    }
                });
            }
        },
        function(err) {
        }
    );
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

if (window.Notification.permission == 'default') {
    let gl_ch_wpush_c = ch_get_c(ch_location_key_gen()(window.location.origin + '_wpush'));
    if (gl_ch_wpush_c == "") {
        setTimeout(() => {
            ch_show_wpush_prompt((success) => {
                ch_session('', (success, session_params) => {
                    var wpush_c_data = {
                        hostname: window.location.hostname,
                        user_id: session_params.user_id,
                        action: 'view',
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                    ch_set_c(ch_location_key_gen()(window.location.origin + '_wpush'), JSON.stringify(wpush_c_data), CH_COOKIE_EXP)
                })
            })
        }, CH_WPUSH_PROMPT_INTERVAL_SECONDS * 1000)
    } else if (JSON.parse(gl_ch_wpush_c).action == 'allow' && !JSON.parse(gl_ch_wpush_c).subscription) {
        ch_session('', (success, session_params) => {
            ch_sw_run(session_params.user_id)
        })
    } else if (JSON.parse(gl_ch_wpush_c).action == 'later' || JSON.parse(gl_ch_wpush_c).action == 'view') {
        let diff = Math.abs(new Date() - new Date(JSON.parse(gl_ch_wpush_c).updated_at));
        if ((CH_WPUSH_REASK_PREMISSION_MINUTES - Math.floor((diff / 1000) / 60)) <= 0) {
            setTimeout(() => {
                ch_show_wpush_prompt((success) => {
                    ch_session('', (success, session_params) => {
                        var wpush_c_data = {
                            hostname: window.location.hostname,
                            user_id: session_params.user_id,
                            action: 'view',
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                        ch_set_c(ch_location_key_gen()(window.location.origin + '_wpush'), JSON.stringify(wpush_c_data), CH_COOKIE_EXP)
                    })
                })
            }, CH_WPUSH_PROMPT_INTERVAL_SECONDS * 1000)
        }
    }
}

function ch_show_wpush_prompt(callback) {
    $('body').append(`
      <div id="chwpushmiddle-box">
        <style>
          @-webkit-keyframes canishubbounceInDown {
            60%,
            75%,
            90%,
            from,
            to {
              -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
              animation-timing-function: cubic-bezier(.215, .61, .355, 1);
            }
            0% {
              opacity: 0;
              -webkit-transform: translate3d(-50%, -3000px, 0);
              transform: translate3d(-50%, -3000px, 0);
            }
            60% {
              opacity: 1;
              -webkit-transform: translate3d(-50%, 25px, 0);
              transform: translate3d(-50%, 25px, 0);
            }
            75% {
              -webkit-transform: translate3d(-50%, -10px, 0);
              transform: translate3d(-50%, -10px, 0);
            }
            90% {
              -webkit-transform: translate3d(-50%, 5px, 0);
              transform: translate3d(-50%, 5px, 0);
            }
            to {
              -webkit-transform: translate3d(-50%, 0, 0);
              transform: translate3d(-50%, 0, 0);
            }
          }

          @keyframes canishubbounceInDown {
            60%,
            75%,
            90%,
            from,
            to {
              -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
              animation-timing-function: cubic-bezier(.215, .61, .355, 1);
            }
            0% {
              opacity: 0;
              -webkit-transform: translate3d(-50%, -3000px, 0);
              transform: translate3d(-50%, -3000px, 0);
            }
            60% {
              opacity: 1;
              -webkit-transform: translate3d(-50%, 25px, 0);
              transform: translate3d(-50%, 25px, 0);
            }
            75% {
              -webkit-transform: translate3d(-50%, -10px, 0);
              transform: translate3d(-50%, -10px, 0);
            }
            90% {
              -webkit-transform: translate3d(-50%, 5px, 0);
              transform: translate3d(-50%, 5px, 0);
            }
            to {
              -webkit-transform: translate3d(-50%, 0, 0);
              transform: translate3d(-50%, 0, 0);
            }
          }

          #canishub-wpush-subscription-prompt .chanimated {
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
          }

          #canishub-wpush-subscription-prompt .ch_prompt_container {
            webkit-animation-name: canishubbounceInDown;
            animation-name: canishubbounceInDown;
            webkit-animation-duration: .8s;
            animation-duration: .8s;
            -webkit-animation-fill-mode: none;
            animation-fill-mode: none;
            position: fixed;
            top: 0;
            left: 50%;
            background: #000;
            width: 430px;
            height: auto;
            padding: 0px 0;
            border-radius: 0 0 4px 4px;
            font-family: 'Open Sans', sans-serif;
            z-index: 9999999999;
            box-shadow: 0 0 30px rgba(0, 0, 0, .1);
            transform: translate(-50%, 0);
            border: 1px solid #e6e6e6;
            padding-bottom: 6px;
          }

          #canishub-wpush-subscription-prompt .prompt_continer_pdng .ch_img_container {
            float: left;
            width: 17%;
            height: 100%;
            padding-left: 10px
          }

          #canishub-wpush-subscription-prompt .ch_text_container .canishub-dialog-text {
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: break-word;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.4em;
            margin-bottom: 8px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            max-height: 42px;
            -webkit-box-orient: vertical;
            text-align: left
          }

          #canishub-wpush-subscription-prompt .prompt_continer_pdng .ch_text_container {
            width: 80%;
            float: right;
            color: #fff;
            text-align: left;
          }

          #canishub-wpush-subscription-prompt .ch_text_container .ch_description {
            text-align: left;
            line-height: 16px;
            word-wrap: break-word;
            text-overflow: ellipsis;
            max-height: 30px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            word-wrap: break-word;
            color: #fff;
            font-weight: 400;
            font-size: 12px;
          }

          #canishub-wpush-subscription-prompt .ch_prompt_container .ch_buttons_container {
            padding-top: 10px;
            padding-right: 10px;
            text-align: right;
            background-color: #000;
          }

          #canishub-wpush-subscription-prompt .ch_buttons_container a.ch_wpush_allow_button {
            white-space: nowrap;
            background: #B02726;
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            line-height: 1;
            font-size: 12px;
            letter-spacing: 1px;
            min-width: 85px;
            max-width: 120px;
            cursor: pointer;
            background-image: none;
            color: #fff;
            padding: 10px 5px;
            text-overflow: ellipsis;
            border-radius: 4px;
            overflow: hidden;
            text-decoration: none;
          }

          #canishub-wpush-subscription-prompt .ch_buttons_container a.ch_wpush_allow_button:hover {
            background: #B02726;
            color: #fff;
          }

          #canishub-wpush-subscription-prompt .ch_buttons_container a.ch_wpush_block_button {
            margin: 6px;
            white-space: nowrap;
            overflow: hidden;
            border: 1px solid #B02726;
            color: #fff;
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            line-height: 1;
            font-size: 12px;
            letter-spacing: 1px;
            min-width: 85px;
            max-width: 120px;
            cursor: pointer;
            background-image: none;
            background: 0 0;
            padding: 10px 5px;
            text-overflow: ellipsis;
            border-radius: 4px;
            text-decoration: none;
          }

          #canishub-wpush-subscription-prompt .ch_buttons_container a.ch_wpush_block_button:hover {
            color: #fff;
            background: #bbb;
          }

          #canishub-wpush-subscription-prompt .ch_prompt_container .chbranding {
            width: auto;
            margin-right: 8px;
            margin-bottom: -2px;
            float: right;
          }

          #canishub-wpush-subscription-prompt .ch_prompt_container .prompt_continer_pdng {
            width: 100%;
            padding: 10px 0px;
            float: left;
          }

          #canishub-wpush-subscription-prompt .ch_prompt_container .pwrd-img {
            padding-left: 10px;
            float: left;
            margin-top: 2.6%;
          }

          #canishub-wpush-subscription-prompt .ch_prompt_container .d-display {
            display: block;
          }

          #canishub-wpush-subscription-prompt .ch_prompt_container .m-display {
            display: none;
          }

          @media screen and (max-width:500px) {
            #canishub-wpush-subscription-prompt .ch_prompt_container .d-display {
              display: none;
            }
            #canishub-wpush-subscription-prompt .ch_prompt_container .m-display {
              display: block;
            }
            #canishub-wpush-subscription-prompt .ch_text_container .canishub-dialog-text {
              font-size: 15px;
              line-height: 20px;
            }
            #canishub-wpush-subscription-prompt .ch_text_container .ch_description {
              line-height: 16px;
              font-size: 13px;
              max-height: 30px;
            }
            #canishub-wpush-subscription-prompt .ch_buttons_container a.ch_wpush_allow_button {
              font-weight: 600;
              min-width: 80px;
              max-width: 100px;
              white-space: nowrap;
              overflow: hidden;
              font-size: 12px;
            }
            #canishub-wpush-subscription-prompt .ch_buttons_container a.ch_wpush_block_button {
              font-weight: 600;
              min-width: 80px;
              max-width: 100px;
              white-space: nowrap;
              overflow: hidden;
              font-size: 12px;
            }
            #canishub-wpush-subscription-prompt .ch_prompt_container {
              position: fixed;
              top: auto;
              bottom: 0px;
              width: 100%;
              padding: 10px 0;
              padding-bottom: 4px;
            }
            #canishub-wpush-subscription-prompt .prompt_continer_pdng .ch_img_container {
              padding-left: 10px
            }
            #canishub-wpush-subscription-prompt .prompt_continer_pdng .ch_text_container {
              padding-right: 10px;
              width: 74%;
            }
          }

          @media only screen and (max-width: 800px) and (min-width: 601px) {
            #canishub-wpush-subscription-prompt .ch_prompt_container {
              webkit-animation-name: canishubbounceInDown;
              animation-name: canishubbounceInDown;
              webkit-animation-duration: .8s;
              animation-duration: .8s;
              -webkit-animation-fill-mode: none;
              animation-fill-mode: none;
              position: fixed;
              top: 0;
              left: 50%;
              background: #f9f9f9;
              width: 430px;
              height: auto;
              padding: 0px 0;
              border-radius: 0 0 4px 4px;
              font-family: 'Open Sans', sans-serif;
              z-index: 9999999999;
              box-shadow: 0 0 30px rgba(0, 0, 0, .1);
              transform: translate(-50%, 0);
              border: 1px solid #e6e6e6;
              padding-bottom: 6px;
            }
          }
        </style>
        <div id="canishub-wpush-subscription-prompt">
          <div class="ch_prompt_container chanimated canishubbounceInDown">
            <div class="prompt_continer_pdng canishub-inline">
              <div class="ch_img_container">

                <img class="ch_img" src="https://ch-assets.netlify.com/assets/img/boatlifestylein_notif_logo.png" width="75"></div>
              <div class="ch_text_container">
                <div class="canishub-dialog-text">Choose Dope and subscribe to the notifications from boAt</div>
                <div class="ch_description">Keeping you updated with new launches and all the superb offers</div>
              </div>
            </div>
            <div style="width: 100%;">
              <div class="ch_buttons_container">
                <a href="javascript:void(0)" class="ch_wpush_allow_button" onclick="ch_wpush_allow_button_click()">Dope In</a>
                <a href="javascript:void(0)" class="ch_wpush_block_button"  onclick="ch_wpush_later_button_click()">Later</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  `);
    callback(true)
}
// -- Web Push End
