if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const b=e=>i(e,c),o={module:{uri:c},exports:f,require:b};s[c]=Promise.all(r.map((e=>o[e]||b(e)))).then((e=>(a(...e),f)))}}define(["./workbox-14ff3674"],(function(e){"use strict";e.setCacheNameDetails({prefix:"blockbench"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"27517b79eaa2962226f0956a73ca3412"},{url:"favicon.png",revision:"bb17c5c284076fc17e3399860df472d7"},{url:"js/animations/animation.js",revision:"4a337093b44c7d135d7b28d32fa072bf"},{url:"js/animations/keyframe.js",revision:"419587d77a4bcb273021d1dc1c18a6e2"},{url:"js/animations/timeline_animators.js",revision:"8685f50721f8b2c55aa4827d0f982efe"},{url:"js/animations/timeline.js",revision:"62f20a95752bbf2c53d4b506f51a49d3"},{url:"js/api.js",revision:"834cff827c0785fec16c4dfae10947ed"},{url:"js/blockbench.js",revision:"951dfb00eab32129614442b10941ce05"},{url:"js/boot_loader.js",revision:"e68faafe0c1dcedc7e72b87eb2ab60f3"},{url:"js/copy_paste.js",revision:"b7b027f3ad55e9f9c2ccad71418c9a1a"},{url:"js/desktop.js",revision:"2808b5fe039dd6ad53e7a051a1d587ee"},{url:"js/display_mode.js",revision:"9c538447a071ea4f00a1194504662ee9"},{url:"js/edit_sessions.js",revision:"1c7de9c66e86546f2c449dfb4cba932b"},{url:"js/file_system.js",revision:"c8a6d728bb33cbd044c9f68ff03c5d98"},{url:"js/interface/action_control.js",revision:"676ce169fbe1c7bfada00088c0d4d70d"},{url:"js/interface/actions.js",revision:"08d7ce28bfbab273271f8ad9afb166a0"},{url:"js/interface/dialog.js",revision:"894a90df5dcea2525015114b5b535cb2"},{url:"js/interface/interface.js",revision:"2bcbb3a2c9055413fb3e8064a5fab3f1"},{url:"js/interface/keyboard.js",revision:"2df5d66a4a735ba3838a9f21b08542f9"},{url:"js/interface/menu.js",revision:"f1fb51f7c048a2ae71d970fb3efa285d"},{url:"js/interface/panels.js",revision:"8c0d0e18b964d16ea16629f166753be6"},{url:"js/interface/settings.js",revision:"6b4f82d742fe6eb71061b3552cf806f1"},{url:"js/interface/start_screen.js",revision:"fd50d704a1cc69250103813bdebd3753"},{url:"js/interface/themes.js",revision:"94af84976f64984f74c2e84277a88318"},{url:"js/io/codec.js",revision:"45db0378cdcb13c5d133fc530687122d"},{url:"js/io/format.js",revision:"bc9f4e1b8ef05dfa056a1bbbb4ca639c"},{url:"js/io/formats/bbmodel.js",revision:"870d4217cabb330050d8ed8db3475a75"},{url:"js/io/formats/bedrock_old.js",revision:"41c7417af9b7a09ea7c5c2b4be59a621"},{url:"js/io/formats/bedrock.js",revision:"dcf8722bc90c01693601fc9ae6c519d5"},{url:"js/io/formats/collada.js",revision:"a1d6a3b0aa75793c9ee59ad4993e5a9a"},{url:"js/io/formats/gltf.js",revision:"1fcb8610f60deafcf02c311c6fb91008"},{url:"js/io/formats/java_block.js",revision:"2155ff1638b6e66a10a500a638f7d842"},{url:"js/io/formats/modded_entity.js",revision:"e6bd6c55f35eec3469340a48b5908485"},{url:"js/io/formats/obj.js",revision:"3ee189cf4ab4e7ca4e617ecfdd369651"},{url:"js/io/formats/optifine_jem.js",revision:"982906e278be20c7da41f38e738236ce"},{url:"js/io/formats/optifine_jpm.js",revision:"9787b52d1d66246133b514e227198156"},{url:"js/io/formats/skin.js",revision:"ed269734cc960a889d025e2422e2eb5c"},{url:"js/io/io.js",revision:"07628c42c3236bf95a9698b59a19ffb2"},{url:"js/io/project.js",revision:"6c37dd67c2fce315cb1a20a2455368bd"},{url:"js/modes.js",revision:"e957a51cb6aff55e87b99c981d10badf"},{url:"js/outliner/cube.js",revision:"a74e3bf07c0965887881bf82d164b22d"},{url:"js/outliner/group.js",revision:"f3b63a24157af4c126514be4c45e393b"},{url:"js/outliner/locator.js",revision:"5596caf87982e41521b77b683e7a41f7"},{url:"js/outliner/mesh.js",revision:"27f78c54d95706f231c9673067c3ff58"},{url:"js/outliner/null_object.js",revision:"a1baa5fc49deed23ee96f592be507412"},{url:"js/outliner/outliner.js",revision:"7d55463c90246937b6584e0a2d93293a"},{url:"js/outliner/texture_mesh.js",revision:"f69b197ec0d3aa1c9cc7320e86212610"},{url:"js/plugin_loader.js",revision:"1381679ec7aa891aaa4d06108392e3ce"},{url:"js/preview/canvas.js",revision:"62f41b7fae2dad4cc8ace779634bd117"},{url:"js/preview/OrbitControls.js",revision:"53e77d6fd939d9db2ae69bf8e1a94b76"},{url:"js/preview/preview.js",revision:"69e59dea010581ceea5fbab5aeb4c6e8"},{url:"js/preview/screenshot.js",revision:"224d18fc77e964257aeb28cf8db7fc0e"},{url:"js/preview/transformer.js",revision:"ca8bd9f6cf26135f524176b069f3393f"},{url:"js/property.js",revision:"bab56b1c980fd8c0991522163b6cc92f"},{url:"js/texturing/color.js",revision:"da7ad74585cb4d89b09811bbbe036eea"},{url:"js/texturing/painter.js",revision:"ec15a54c0eda9e96db3e70762baf7424"},{url:"js/texturing/texture_generator.js",revision:"b4c3b8af93dbb3204b37d81af4ac3395"},{url:"js/texturing/textures.js",revision:"e04f1ccf2db63b1c9845d4f3b4805770"},{url:"js/texturing/uv.js",revision:"2cd0ee13eda8c9131f0f9250f621b031"},{url:"js/transform.js",revision:"d3afc42523a22eab0630e3f1de617a9f"},{url:"js/undo.js",revision:"95f830cd1d87cdeddffca224547e00eb"},{url:"js/util.js",revision:"debf8d4fadeeae056b269fb26a7be64d"},{url:"js/web.js",revision:"b604e0a1d9991ec36ff44dacf05110d9"},{url:"js/webpack/bundle.js",revision:"17f4c9c65ce3f07439bae5a85ae711bb"},{url:"lib/CanvasFrame.js",revision:"af677de11b513f6c8c8ff96e31e59acd"},{url:"lib/color-picker.min.js",revision:"1725de455ed2f45daafb69dd90413104"},{url:"lib/fik.min.js",revision:"9985a46a1107966f2375d0c61241c689"},{url:"lib/FileSaver.js",revision:"547422b2d7a739f14eefa1fc1c59c658"},{url:"lib/gif.js",revision:"6760f4c06414ceb8b3d30e14d3a59c69"},{url:"lib/gif.worker.js",revision:"d8cc71ca8334b5002e4481497802c2ac"},{url:"lib/GLTFExporter.js",revision:"3c268bb7ffabb764bbb0513a5f0b23ee"},{url:"lib/jimp.min.js",revision:"44fc5c9cee92b9d0d7738f21353297b9"},{url:"lib/jquery-ui.min.js",revision:"f7275ece7d6dea2aec3c23457415695c"},{url:"lib/jquery.js",revision:"3e4bb227fb55271bfe9c9d4a09147bd8"},{url:"lib/jszip.min.js",revision:"9927b911fee8d35162919d3790c7d492"},{url:"lib/lzutf8.js",revision:"37d1ff3b0710ba8961bcdc2c560baa17"},{url:"lib/marked.min.js",revision:"589a61c766b709a5767f76b05176459a"},{url:"lib/molang-prism-syntax.js",revision:"b0f1fa782ca08a1dfc4c4ee43ee3e88b"},{url:"lib/molang.umd.js",revision:"3b04f00e1ad82290f7e73dd30a2e4293"},{url:"lib/peer.min.js",revision:"6affa612a1e35bc918863b233c3881fe"},{url:"lib/prism.js",revision:"f60031ca28963cd4f765111f42cbf615"},{url:"lib/spectrum.js",revision:"e768b31f35e9aa6eab2973a9e909639a"},{url:"lib/targa.js",revision:"17c5ce65af686baa97294748f929541e"},{url:"lib/three_custom.js",revision:"0764cc3cfc9913677607ac5af29600c2"},{url:"lib/three.min.js",revision:"0a8a3113f4c503210e9a8de577025ff4"},{url:"lib/vue_sortable.js",revision:"87cfedd91d600fb8d44668a0e83d4101"},{url:"lib/vue.min.js",revision:"0a9a4681294d8c5f476687eea6e74842"},{url:"lib/VuePrismEditor.min.js",revision:"8f5640c24ff4b75b71d04772a23a1f5d"},{url:"lib/wintersky.umd.js",revision:"bd6bdaaf35e8cc3022ade8cd6c8a10bf"},{url:"css/dialogs.css",revision:"995f7c44d952f60c57171aea6998f481"},{url:"css/fontawesome.css",revision:"c495d61f0f4ac5620822edc1eb6c669e"},{url:"css/general.css",revision:"059dad00d5f084a6f15f7488e288870e"},{url:"css/jquery-ui.min.css",revision:"db778110650dea1e4533cd09f75533a2"},{url:"css/panels.css",revision:"e93515b800e285cb95bff6ef21d961f7"},{url:"css/prism.css",revision:"d67816ad66eac995b77611057f3df62f"},{url:"css/setup.css",revision:"ee5ab89c2a6d7bbc47ead67ec5a37640"},{url:"css/spectrum.css",revision:"e098bfc3ebe7f872cff980de8c3ef07f"},{url:"css/w3.css",revision:"04db708c100ea3937a3a5bf138cfcbf3"},{url:"css/window.css",revision:"2ad9b11c6f9d68f32633f0447d2364eb"},{url:"assets/armor_stand.png",revision:"3df02c489fe7757dab55113d4fc057fd"},{url:"assets/brush.png",revision:"b6a28bb79f9dea063d7a2ac620a3236a"},{url:"assets/hud.png",revision:"049320fa871e4fbe54978dd6043acd8c"},{url:"assets/inventory_full.png",revision:"430fc3c0627f04302d457eead5e1fa16"},{url:"assets/inventory_nine.png",revision:"28cc307e3f2ee4570532fe6ee01a6131"},{url:"assets/item_frame.png",revision:"08eaa797bfb1ceb3784b6fa04ce77387"},{url:"assets/logo_cutout.svg",revision:"1a2b2e5db76846d910af304e87605aee"},{url:"assets/logo_text_white.svg",revision:"021abc358f6fd915b2ad77d548bb1954"},{url:"assets/missing_blend.png",revision:"5d055c1476e74bcdfd987ab62045b8a6"},{url:"assets/missing.png",revision:"462b3d598e49c3bbd453bb01d88ac6aa"},{url:"assets/north.png",revision:"d6c44f75fe7a6dd16927b9b8d8d0e9c2"},{url:"assets/player_skin.png",revision:"bd60891dc6eacb8f038556dfdb1dadcc"},{url:"assets/poses/aiming.svg",revision:"99cc4acebde8bf10e5578a6ff0c4d418"},{url:"assets/poses/crouching.svg",revision:"ea45f7a8485078ac9fc50bf6cf032542"},{url:"assets/poses/jumping.svg",revision:"268a1a6966abb5b8eef0fc783017b980"},{url:"assets/poses/natural.svg",revision:"1bc79dd4c044a9fd330745699db6d721"},{url:"assets/poses/none.svg",revision:"38929100bfd2f391c3650fdde20b0e03"},{url:"assets/poses/sitting.svg",revision:"23eab940f7e9729a6e24438487553e7d"},{url:"assets/poses/walking.svg",revision:"eee91b6c25b42f5901961d39d35854d5"},{url:"assets/rotate_cursor.png",revision:"092b9000c5901c27d4bee37236f6407c"},{url:"assets/vertex.png",revision:"6b314afc9e5a153db6798cf8c0a93918"},{url:"assets/zombie.png",revision:"648e846e49c7563eb2625f39b76155b2"},{url:"font/Assistant-Bold.ttf",revision:"d582391da9a68daf10a2ed2514c33826"},{url:"font/Assistant-ExtraBold.ttf",revision:"f2bbc6bae2ee3ce641adc1bb1a655371"},{url:"font/Assistant-ExtraLight.ttf",revision:"5e4d348ae3eca48143c0274a3124a9c0"},{url:"font/Assistant-Light.ttf",revision:"5415f395c1567a5c19efc1dc2892927a"},{url:"font/Assistant-Regular.ttf",revision:"e2b46dd69f54e57767ceef1d5fc8e688"},{url:"font/Assistant-SemiBold.ttf",revision:"d6759edb35ac7f29a029caa1192c010d"},{url:"font/fa-brands-400.woff2",revision:"5e2f92123d241cabecf0b289b9b08d4a"},{url:"font/fa-regular-400.woff2",revision:"e6257a726a0cf6ec8c6fec22821c055f"},{url:"font/fa-solid-900.woff2",revision:"418dad87601f9c8abd0e5798c0dc1feb"},{url:"font/icomoon.ttf",revision:"6c533223c54e6efaff1e3bd2cf997750"},{url:"font/icomoon.woff",revision:"edb58213d61e108e1c28f396aec82691"},{url:"font/MaterialIcons-Regular.ttf",revision:"548cdd0e4a7d21c2a9c3bc8580254239"}],{})}));
