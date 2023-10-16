;/*FB_PKG_DELIM*/

__d("BarcelonaLoginButton.react",["BarcelonaSpinner.react","CometPressable.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={button:{backgroundColor:"x1ar9j3b",borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",color:"x1ub4mfp",fontSize:"xjohtrz",fontWeight:"x1s688f",height:"xnnlda6",lineHeight:"x1a6qonq",opacity:"x1hc1fzr",paddingTop:"xyamay9",paddingEnd:"x1pi30zi",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",transitionDuration:"x1g2r6go",transitionProperty:"x11xpdln",width:"xh8yej3",zIndex:"x1vjfegm",":active_transform":"xk4oym4","@media (prefers-reduced-motion: reduce)_transitionDuration":"x12w9bfk",$$css:!0},buttonDisabled:{cursor:"x1h6gzvc",":active_transform":"x1pdlv7q",$$css:!0},buttonLoading:{":active_transform":"x1pdlv7q",$$css:!0},buttonPlaceholder:{backgroundColor:"xzii09s",borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",height:"x5yr21d",position:"x10l6tqk",width:"xh8yej3",zIndex:"x1ja2u2z",$$css:!0},label:{alignItems:"x6s0dn4",display:"x78zum5",height:"x5yr21d",justifyContent:"xl56j7k",width:"xh8yej3",$$css:!0},labelDisabled:{opacity:"xti2d7y",$$css:!0},root:{position:"x1n2onr6",$$css:!0},spinner:{color:"x1ub4mfp",$$css:!0}};function a(a){var b=a.children,d=a.disabled,e=a.loading,f=a.onClick,g=a.onDisabledClick;a=a.testid;function j(){if(d){g==null?void 0:g();return}f()}return h.jsxs("div",{className:"x1n2onr6",children:[h.jsx("div",{className:"xzii09s xyi19xy x1ccrb07 xtf3nb5 x1pc53ja x5yr21d x10l6tqk xh8yej3 x1ja2u2z"}),h.jsx(c("CometPressable.react"),{onPress:j,overlayDisabled:!0,testid:void 0,xstyle:[i.button,d&&i.buttonDisabled,e&&i.buttonLoading],children:h.jsx("div",{className:c("stylex")(i.label,d&&i.labelDisabled),children:e?h.jsx(c("BarcelonaSpinner.react"),{size:"small",xstyle:i.spinner}):b})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BarcelonaLoginTextInput.react",["BaseTextInput.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{backgroundColor:"x90nhty",borderTopColor:"x1v8p93f",borderEndColor:"xogb00i",borderBottomColor:"x16stqrj",borderStartColor:"x1ftr3km",borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",color:"xp07o12",fontSize:"xjohtrz",lineHeight:"x1a6qonq",paddingTop:"xyamay9",paddingEnd:"x1pi30zi",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",width:"xh8yej3","::placeholder_color":"x1e899rk",":focus_borderTopColor":"x1sbm3cl",":focus_borderEndColor":"x1rpcs5s",":focus_borderBottomColor":"x1c5lum3",":focus_borderStartColor":"xd5rq6m",$$css:!0}};function a(a){var b=a.autoComplete,d=a.inputMode,e=a.inputRef,f=a.onChangeText,g=a.onFocus,j=a.pattern,k=a.placeholder,l=a.testid;l=a.type;l=l===void 0?"text":l;a=a.value;return h.jsx(c("BaseTextInput.react"),{autoComplete:b,inputMode:d,onChange:function(a){f(a.target.value)},onFocus:g,pattern:j,placeholder:k,ref:e,suppressFocusRing:!0,testid:void 0,type:l,value:a,xstyle:i.root})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BarcelonaLoginWithInstagramButton.react",["fbt","BarcelonaLoginButton.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.disabled,d=a.loading,e=a.onClick;a=a.onDisabledClick;return i.jsx(c("BarcelonaLoginButton.react"),{disabled:b,loading:d,onClick:e,onDisabledClick:a,testid:void 0,children:i.jsxs("div",{className:"x6s0dn4 xrvj5dj xofrnu2 x1o2pa38 xh8yej3",children:[i.jsx("div",{className:"xgkxs2y xxk0z11 xvy4d1p",children:i.jsx(j,{})}),i.jsx("div",{className:"xwhw2v2 x1npkx4u",children:h._("Entrar")})]})})}a.displayName=a.name+" [from "+f.id+"]";function j(){return i.jsxs("svg",{"aria-label":h._("Instagram"),fill:"none",height:24,role:"img",width:24,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[i.jsx("mask",{height:24,id:"b",maskUnits:"userSpaceOnUse",style:{maskType:"alpha"},width:24,x:0,y:0,children:i.jsx("path",{d:"M0 0h24v24H0z",fill:"url(#a)"})}),i.jsx("g",{mask:"url(#b)",children:i.jsx("path",{d:"M0 0h24v24H0z",fill:"currentColor"})}),i.jsxs("defs",{children:[i.jsx("pattern",{height:1,id:"a",patternContentUnits:"objectBoundingBox",width:1,children:i.jsx("use",{transform:"scale(.02083)",xlinkHref:"#c"})}),i.jsx("image",{height:48,id:"c",width:48,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAEfElEQVRoBe2azYpVRxSFjT8xJgMJ0UE3KrQxo05mQdGBPQiZqCOh8wShfYK8QiBPkMzyAIFOJiZgQBoniqgTbXAQEUV0ICgO/Gn/4vpCV7vc9XPvOdy+nQsuWJyqXbv2XnVOnao6t3vTpvfY2DvwQYf0e+R7TDwoHhB3izvFj8Xt4jZxi0jMWtx/1QZfiS/EFfGJ+Ei8L/4jXhT/FO+II8FxRTkvpuTjupKT3L3BHT4rjktwLQ8a0NIJs/K+JdaCluwv5c+UeCY+NTJFUp02fPAtxajZ0IKmDKW5ymgvifuCN0lPi2fEa+Jd8aH4WEQUybuA3B+JvEOfitPiV+K3IlNnq+i4rcrX4n03lsqlabMox/0l53WyzSguOeMTQVsTJ9QaO/3U7LF+jTwhckc9aKziglq8A3dhXNilRCfFQ5aQQcQngcYi9srq4lmneZTjAHP7gZjy/2pJ0YCW1MYVrRlOyeJOf2Qe62f4O+RGhz8JtLi2hSRlcyroyg7rYLXpC3bmL8S5VVLGVgMrUITbohYf3Fq/JZV8lEfXWoYrMF+/E7lbLK0eizI22uZFfB0/quL+TCfeiQS0ePtSavDrcnDivDMsjsjxiuhJWmV8D1vwD1VmEGhgOvFOONDi8fDLwOHJnT7LPMqG72V+Hvp6nFqZPvQdBmjxOGjN4KsAzuySg4AAD+zl62r7a5WUvc3LwwxiR+iP1gyPZfHAcZ7GDkyBeOc5bvwslnZtbLTFcxAxfDqpmgEtrg2tGVwMSVogYJzznIu+aXVabcMHXxd0WfVBN8wHjtYMfGSkoBzOWmC1Sb5cCT6M+BQTXxdEjPnUWLmiKeVEa4bXsiQHjr0txI2FqdEV9En5uP4+IACakj9aM6RGrk+z1rcGNiTO+O5fmvNve5RL9PEYzOvWZocm98+ieiMCa2BXdV9WmL6IqxOxaygOYHPNu2GfDm03Q71LNfadanTmpmXoM4AsyEYaagNoLWl3g+CZUO9SjX3vNTq3NP3Xzef1oJc4bnq8kF1BH8/Z6yX2J+BzrDVa1mMOXI4fvDJkOfY5o36t/cc1uda1dBO/kU38USLOa39ka4/JCodV9kHzWDke/CJ+LkZgoy0eIYhBrBbQEt+XzH/ij9N8JPgoJ+6DZjkM4ED2jOoGpgBHYr8BrTK+g6aNZ0OLx0NrhiVZ3KnPR/28YnCqjO8TcbHRhs+g90su76D6Ub/V3G6oPGf1L1U+Z/VBRUT+tkpOlfvEKRGww94WV6j0AD/6OtCaYUEWfwKc+f8viN8faM2wRxYfAD/nzWRe4zegAS2ubW9NRunH3a7ztRa7j53ci6KLr/64S4Laz+sbMQhydv55nUGcFX3ElLkLM+K4QK5459GBtndQurO75XFJZBVxcAQ4LXISvSryXcDPIyyPrC4k6AJys1p9Io70T0yIYAm9JcYn0aozQAbyTOR7gu9qJzba8InnoVZc2tAyK3YCT6I0nQYlG3U7GtDSG7zYcXUatchSPHKSu4nSO1DrwD4xkf9qUBvQe/so7sAb9CvL5Hx8fkMAAAAASUVORK5CYII="})]})]})}j.displayName=j.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BarcelonaTwoFactorTypes.flow",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({SMS:"1",BACKUP_CODE:"2",TOTP:"3"});f.TwoFactorVerificationMethod=a}),66);
__d("InstagramLoginQPL",["QPLUserFlow"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){this.$2=!1,this.$1=a}var b=a.prototype;b.$3=function(a,b){c("QPLUserFlow").addPoint(this.$1,a,b)};b.$4=function(a){c("QPLUserFlow").addAnnotations(this.$1,a)};b.isActive=function(){return this.$2};b.start=function(a){a===void 0&&(a={}),this.$2=!0,c("QPLUserFlow").start(this.$1,babelHelpers["extends"]({cancelExisting:!0},a))};b.endSuccess=function(){c("QPLUserFlow").endSuccess(this.$1),this.$2=!1};b.endFailure=function(a,b){c("QPLUserFlow").endFailure(this.$1,a,{error:b}),this.$2=!1};b.endCancel=function(a,b){a===void 0&&(a=4),c("QPLUserFlow").endCancel(this.$1,{annotations:{string:{cancel_type:b}},cancelReason:a}),this.$2=!1};b.endCancelNavigateToSignup=function(){this.endCancel(615,"navigate_to_signup")};b.endCancelNavigateToForgotPassword=function(){this.endCancel(615,"navigate_to_forgot_password")};b.endCancelCloseLoginModal=function(){this.endCancel(4,"close_login_modal")};b.setIsModal=function(a){this.$4({bool:{is_modal:a}})};b.addPointUsernameFocus=function(){this.$3("username_focus")};b.addPointPasswordFocus=function(){this.$3("password_focus")};b.addPointLoginFormSubmit=function(){this.$3("login_form_submit")};b.addPointLoginButtonClick=function(){this.$3("login_button_click")};b.addPointTwoFactorFormLoad=function(a){this.$3("two_factor_form_load",{data:{string:{variant:a}}})};b.addPointTwoFactorCodeFocus=function(){this.$3("two_factor_code_focus")};b.addPointTwoFactorRequestNewSMSCode=function(){this.$3("two_factor_request_new_sms_code")};b.addPointTwoFactorSubmitButtonClick=function(){this.$3("two_factor_submit_button_click")};b.addPointTwoFactorFormSubmit=function(a){this.$3("two_factor_form_submit",{data:{string:{two_factor_verification_method:a}}})};b.addPointUserError=function(a){this.$3("user_error",{data:{string:{error:a}}})};b.addAnnotationTwoFactorErrorType=function(a){this.$4({string:{two_factor_error_type:a}})};b.markError=function(a,b){c("QPLUserFlow").markError(this.$1,a,{error:b})};return a}();g["default"]=a}),98);
__d("BarcelonaLoginQPL",["BarcelonaTwoFactorTypes.flow","InstagramLoginQPL","qpl"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.call(this,c("qpl")._(979446684,"1820"))||this}var e=b.prototype;e.addPointBarcelonaTwoFactorFormLoad=function(a){switch(a){case d("BarcelonaTwoFactorTypes.flow").TwoFactorVerificationMethod.BACKUP_CODE:this.addPointTwoFactorFormLoad("backup_code");break;case d("BarcelonaTwoFactorTypes.flow").TwoFactorVerificationMethod.SMS:this.addPointTwoFactorFormLoad("sms");break;case d("BarcelonaTwoFactorTypes.flow").TwoFactorVerificationMethod.TOTP:this.addPointTwoFactorFormLoad("totp");break}};return b}(c("InstagramLoginQPL"));b=new a();g["default"]=b}),98);
__d("BarcelonaLoginForm.react",["fbt","BarcelonaLoginQPL","BarcelonaLoginTextInput.react","BarcelonaLoginWithInstagramButton.react","BarcelonaQRCode.react","BarcelonaText.react","BarcelonaTextLink.react","FocusRegion.react","cr:624","focusScopeQueries","isStringNullOrWhitespaceOnly","react","useBarcelonaToaster"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");e=d("react");var j=e.useRef,k=e.useState,l={forgotLink:{marginTop:"xw7yly9",$$css:!0},heading:{marginBottom:"x1yztbdb",$$css:!0},hidden:{display:"x1s85apg",$$css:!0},passwordInput:{marginBottom:"x1e56ztr",position:"x1n2onr6",$$css:!0},qrCode:{gridColumn:"x1npkx4u",height:"xnnlda6",width:"x15yg21f",$$css:!0},qrCodeContainer:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",marginTop:"xg87l8a",$$css:!0},qrCodeText:{paddingEnd:"x1pi30zi",$$css:!0},root:{display:"x78zum5",flexDirection:"xdt5ytf",width:"xh8yej3",$$css:!0},usernameInput:{marginBottom:"x1e56ztr",$$css:!0}};function a(a){var e=a.loading,f=a.oidcURL,g=a.onSubmit;a=k("");var m=a[0],n=a[1];a=k("");var o=a[0],p=a[1],q=d("useBarcelonaToaster").useBarcelonaToaster(),r=j(),s=j(),t=c("isStringNullOrWhitespaceOnly")(m)||c("isStringNullOrWhitespaceOnly")(o),u=function(a){a==null?void 0:a.preventDefault(),!t&&!e&&(c("BarcelonaLoginQPL").addPointLoginFormSubmit(),g(m,o))};a=function(a){c("BarcelonaLoginQPL").addPointLoginButtonClick(),u(a)};function v(){if(c("isStringNullOrWhitespaceOnly")(m)){var a;(a=r.current)==null?void 0:a.focus();q.push({message:h._("Insira seu nome de usu\u00e1rio do Instagram, n\u00famero de celular ou email.")})}else if(c("isStringNullOrWhitespaceOnly")(o)){(a=s.current)==null?void 0:a.focus();q.push({message:h._("Insira sua senha.")})}}return i.jsxs("form",{method:"POST",onSubmit:u,children:[i.jsxs("div",{className:"x78zum5 xdt5ytf xh8yej3",children:[b("cr:624")!=null&&f!=null?i.jsx("div",{className:"x1yztbdb",children:i.jsx(b("cr:624"),{oidcURL:f})}):i.jsx(c("BarcelonaText.react"),{size:"label",textAlign:"center",weight:"bold",xstyle:l.heading,children:h._("Entrar com o Instagram")}),i.jsx("div",{className:"x1e56ztr",children:i.jsx(d("FocusRegion.react").FocusRegion,{autoFocusQuery:d("focusScopeQueries").focusableScopeQuery,children:i.jsx(c("BarcelonaLoginTextInput.react"),{autoComplete:"username",inputRef:r,onChangeText:function(a){return n(a)},onFocus:function(){return c("BarcelonaLoginQPL").addPointUsernameFocus()},placeholder:h._("Nome de usu\u00e1rio, telefone ou email"),testid:void 0,value:m})})}),i.jsx("div",{className:"x1e56ztr x1n2onr6",children:i.jsx(c("BarcelonaLoginTextInput.react"),{autoComplete:"current-password",inputRef:s,onChangeText:function(a){return p(a)},onFocus:function(){return c("BarcelonaLoginQPL").addPointPasswordFocus()},placeholder:h._("Senha"),testid:void 0,type:"password",value:o})}),i.jsx(c("BarcelonaLoginWithInstagramButton.react"),{disabled:t,loading:e,onClick:a,onDisabledClick:v}),i.jsx("div",{className:"xw7yly9",children:i.jsx(c("BarcelonaText.react"),{color:"secondaryText",textAlign:"center",zeroMargin:!0,children:i.jsx(c("BarcelonaTextLink.react"),{color:"secondary",href:"https://www.instagram.com/accounts/password/reset/",children:h._("Esqueceu a senha?")})})}),i.jsxs("div",{className:"x6s0dn4 x78zum5 xl56j7k xg87l8a",children:[i.jsx("div",{className:"x1pi30zi",children:i.jsx(c("BarcelonaText.react"),{color:"primaryText",zeroMargin:!1,children:h._("Baixe o app com o QR code")})}),i.jsx("div",{className:"x1npkx4u xnnlda6 x15yg21f",children:i.jsx(c("BarcelonaQRCode.react"),{})})]})]}),i.jsx("input",{className:"x1s85apg",type:"submit"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BarcelonaLoginError",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({NOT_ONBOARDED:"not_onboarded",COUNTRY_BLOCKED:"country_blocked",UNKNOWN:"unknown"});c=a;f["default"]=c}),66);
__d("BarcelonaLoginPageGraphic.react",["BarcelonaSharedData","react","useCurrentDisplayMode"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){var a=i();return h.jsxs("picture",{alt:"",className:"x47corl x87ps6o",children:[h.jsx("source",{srcSet:a.webp,type:"image/webp"}),h.jsx("img",{alt:"",height:510,src:a.png,width:1785})]})}a.displayName=a.name+" [from "+f.id+"]";function i(){var a=c("BarcelonaSharedData").locale==="en_GB"||c("BarcelonaSharedData").locale==="en_US",b=c("useCurrentDisplayMode")();b=b==="dark";if(a)return b?{png:"/images/barcelona/ribbons/english-dark.png",webp:"/images/barcelona/ribbons/english-dark.webp"}:{png:"/images/barcelona/ribbons/english-light.png",webp:"/images/barcelona/ribbons/english-light.webp"};return b?{png:"/images/barcelona/ribbons/nonenglish-dark.png",webp:"/images/barcelona/ribbons/nonenglish-dark.webp"}:{png:"/images/barcelona/ribbons/nonenglish-light.png",webp:"/images/barcelona/ribbons/nonenglish-light.webp"}}g["default"]=a}),98);
__d("BarcelonaLoginUtils",["BarcelonaCommonStrings","BarcelonaSentryError","InstagramAPIFetch","isStringNullOrWhitespaceOnly"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){if(a instanceof d("InstagramAPIFetch").InstagramAPIFetchError&&a.responseObject!=null)if(a.responseObject.spam===!0)d("BarcelonaSentryError").showSentryError();else{a=c("isStringNullOrWhitespaceOnly")(a.responseObject.message)?d("BarcelonaCommonStrings").GENERIC_ERROR_MESSAGE:a.responseObject.message;b(a)}b(d("BarcelonaCommonStrings").GENERIC_ERROR_MESSAGE)}g.handleLoginError=a}),98);
__d("BarcelonaLoginPage.react",["fbt","BarcelonaCommonStrings","BarcelonaFooter.react","BarcelonaLoginAPI","BarcelonaLoginForm.react","BarcelonaLoginPageGraphic.react","BarcelonaLoginQPL","BarcelonaLoginUtils","BarcelonaToastStrings","FBLogger","InstagramAPIFetch","InstagramPasswordEncryption","goForceFullPageRedirectTo","isStringNullOrWhitespaceOnly","promiseDone","react","refine","requireDeferred","useBarcelonaDeferredDialog","useBarcelonaToaster"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useEffect,k=b.useRef,l=b.useState,m=c("requireDeferred")("BarcelonaLoginOnboardDialog.react").__setRef("BarcelonaLoginPage.react"),n=c("requireDeferred")("BarcelonaLoginRegionGatedDialog.react").__setRef("BarcelonaLoginPage.react"),o=c("requireDeferred")("BarcelonaTwoFactorDialog.react").__setRef("BarcelonaLoginPage.react");function p(a){if(a instanceof d("InstagramAPIFetch").InstagramAPIFetchError&&a.statusCode===400)try{var b=d("refine").object({device_id:d("refine").optional(d("refine").string()),eligible_for_multiple_totp:d("refine").optional(d("refine").bool()),obfuscated_phone_number:d("refine").optional(d("refine").string()),show_trusted_device_option:d("refine").optional(d("refine").bool()),sms_two_factor_on:d("refine").optional(d("refine").bool()),totp_two_factor_on:d("refine").optional(d("refine").bool()),two_factor_identifier:d("refine").optional(d("refine").string()),username:d("refine").optional(d("refine").string())});b=d("refine").object({two_factor_info:b});b=d("refine").jsonParser(b);if(c("isStringNullOrWhitespaceOnly")(a.responseText))return null;a=b((b=a.responseText)!=null?b:"");if(a!=null){b=a.two_factor_info;return babelHelpers["extends"]({},b)}}catch(a){c("FBLogger")("barcelona_web").catching(a).mustfix("Failed to parse login response")}return null}function a(a){var b=a.error;a=a.oidcURL;var e=d("useBarcelonaToaster").useBarcelonaToaster(),f=l(!1),g=f[0],q=f[1];j(function(){c("BarcelonaLoginQPL").isActive()||c("BarcelonaLoginQPL").start()},[]);var r=c("useBarcelonaDeferredDialog")(o),s=c("useBarcelonaDeferredDialog")(m),t=c("useBarcelonaDeferredDialog")(n),u=k(b);j(function(){if(u.current==null)return;switch(u.current){case"not_onboarded":s({});break;case"country_blocked":t({});break;case"unknown":e.push({message:d("BarcelonaCommonStrings").GENERIC_ERROR_MESSAGE});break}u.current=null},[u,e,s,t]);f=function(a,b){var f=c("InstagramPasswordEncryption").key_id,g=c("InstagramPasswordEncryption").public_key,i=c("InstagramPasswordEncryption").version;if(f==null||g==null||i==null){c("FBLogger")("barcelona_web").mustfix("Missing encryption data");e.push({message:d("BarcelonaCommonStrings").GENERIC_ERROR_MESSAGE});return}q(!0);c("promiseDone")(d("BarcelonaLoginAPI").login({encryptionKeyId:f,encryptionPublicKey:g,encryptionVersion:i,password:b,username:a}),function(a){if(a.authenticated){c("BarcelonaLoginQPL").endSuccess();return c("goForceFullPageRedirectTo")("/")}q(!1);a.has_access_to_text_post_app===!1?(c("BarcelonaLoginQPL").addPointUserError("no_access"),e.push({message:h._("Voc\u00ea ainda n\u00e3o pode entrar. Tente novamente mais tarde.")})):a.has_onboarded_to_text_post_app===!1?(c("BarcelonaLoginQPL").addPointUserError("onboarding_dialog"),s({})):a.is_country_blocked===!0?(c("BarcelonaLoginQPL").addPointUserError("country_blocked"),t({})):a.user===!0?(c("BarcelonaLoginQPL").addPointUserError("password_mismatch"),e.push({message:d("BarcelonaToastStrings").ERROR_LOGIN_PASSWORD})):(c("BarcelonaLoginQPL").addPointUserError("login_mismatch"),e.push({message:d("BarcelonaCommonStrings").GENERIC_ERROR_MESSAGE}))},function(a){var b=p(a);q(!1);b!=null?r({deviceId:b.device_id,identifier:b.two_factor_identifier,obfuscatedPhoneNumber:b.obfuscated_phone_number,totpTwoFactorOn:b.totp_two_factor_on,username:b.username}):(c("BarcelonaLoginQPL").markError("request_failed",a),d("BarcelonaLoginUtils").handleLoginError(a,function(a){e.push({message:a})}))})};return i.jsxs("div",{className:"x6s0dn4 xzii09s x78zum5 xdt5ytf x1iyjqo2 xl56j7k x137vrcb x6ikm8r x10wlt62 x1n2onr6 xh8yej3",children:[i.jsx("div",{className:"x10l6tqk x13vifvy x1ja2u2z x6n63s2 x4ga4hn",children:i.jsx(c("BarcelonaLoginPageGraphic.react"),{})}),i.jsx("div",{className:"xxlii1b xenbecp x1p5oq8j xxbr6pl xwxc41k xbbxn1n xh8yej3 x1vjfegm xcxhjfh",children:i.jsx(c("BarcelonaLoginForm.react"),{loading:g,oidcURL:a,onSubmit:f})}),i.jsx("div",{className:"x1ey2m1c x10l6tqk xh8yej3",children:i.jsx(c("BarcelonaFooter.react"),{})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);