/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
/* harmony import */ var three_examples_jsm_helpers_RectAreaLightHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/helpers/RectAreaLightHelper.js */ "./node_modules/three/examples/jsm/helpers/RectAreaLightHelper.js");
//21FI003 網中優希




class ThreeJSContainer {
    scene;
    geometry;
    material;
    TorusKno;
    light;
    particles;
    particles2;
    constructor() {
    }
    // 画面部分の作成(表示する枠ごとに)*
    createRendererDOM = (width, height, cameraPos) => {
        let renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_3__.Color(0x000000));
        //カメラの設定
        let camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0));
        let orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        let render = (time) => {
            orbitControls.update();
            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    // シーンの作成(全体で1回)
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();
        this.geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(1, 1, 1);
        this.material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshLambertMaterial({ color: 0x55ff00 });
        this.TorusKno = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(this.geometry, this.material);
        //this.TorusKno.castShadow = true;
        //this.scene.add(this.TorusKno);
        //コントロール
        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_1__.GUI();
        /**
         * Lights
         */
        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 0.5); //(色,光の強さ)
        this.scene.add(ambientLight);
        gui.add(ambientLight, 'intensity').min(0).max(1).step(0.01);
        const directionalLight = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0x00fffc, 0.3);
        directionalLight.position.set(1, 0.25, 0);
        this.scene.add(directionalLight);
        const hemisphereLight = new three__WEBPACK_IMPORTED_MODULE_3__.HemisphereLight(0xff0000, 0x0000ff, 0.3); //(片側の色、もう片方の色、強さ)
        this.scene.add(hemisphereLight);
        const pointLight = new three__WEBPACK_IMPORTED_MODULE_3__.PointLight(0xff9000, 0.5, 10, 2); //(色、強さ、減衰距離,減衰速度)
        pointLight.position.set(0.5, -0.5, 1);
        this.scene.add(pointLight);
        const rectAreaLight = new three__WEBPACK_IMPORTED_MODULE_3__.RectAreaLight(0x4e00ff, 2, 1, 1);
        rectAreaLight.position.set(-1.5, 0, 1.5);
        rectAreaLight.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3());
        this.scene.add(rectAreaLight);
        const spotLight = new three__WEBPACK_IMPORTED_MODULE_3__.SpotLight(0x78ff00, 0.5, 6, Math.PI * 0.1, 0.25, 1);
        spotLight.position.set(0, 2, 3);
        this.scene.add(spotLight);
        spotLight.target.position.x = -0.75;
        this.scene.add(spotLight.target);
        //Helpers
        const hemisphereLightHelper = new three__WEBPACK_IMPORTED_MODULE_3__.HemisphereLightHelper(hemisphereLight, 0.2);
        this.scene.add(hemisphereLightHelper);
        const directionalLightHelper = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLightHelper(directionalLight, 0.2);
        this.scene.add(directionalLightHelper);
        const pointLightHelper = new three__WEBPACK_IMPORTED_MODULE_3__.PointLightHelper(pointLight, 0.2);
        this.scene.add(pointLightHelper);
        const spotLightHelper = new three__WEBPACK_IMPORTED_MODULE_3__.SpotLightHelper(spotLight);
        this.scene.add(spotLightHelper);
        const rectAreaLightHelper = new three_examples_jsm_helpers_RectAreaLightHelper_js__WEBPACK_IMPORTED_MODULE_2__.RectAreaLightHelper(rectAreaLight);
        this.scene.add(rectAreaLightHelper);
        directionalLightHelper.visible = false;
        hemisphereLightHelper.visible = false;
        pointLightHelper.visible = false;
        spotLightHelper.visible = false;
        rectAreaLightHelper.visible = false;
        /**
         * Objects
         */
        // Material
        const material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshStandardMaterial();
        material.roughness = 0.4;
        // Objects
        const sphere = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(new three__WEBPACK_IMPORTED_MODULE_3__.SphereGeometry(0.5, 32, 32), material);
        //sphere.position.x = - 1.5
        const TorusKno = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(new three__WEBPACK_IMPORTED_MODULE_3__.TorusKnotGeometry(0.4, 0.2), material);
        TorusKno.position.y = 0.1;
        const torus = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(new three__WEBPACK_IMPORTED_MODULE_3__.TorusGeometry(0.3, 0.2, 32, 64), material);
        torus.position.x = 1.5;
        const plane = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(new three__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry(5, 5), material);
        plane.rotation.x = -Math.PI * 0.5;
        plane.position.y = -0.65;
        this.scene.add(sphere, TorusKno, plane);
        //パーティクルの波
        /**
         * Textures
         */
        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader();
        const particleTexture = textureLoader.load('2.png'); //テクスチャをロード
        const simpleShadow = textureLoader.load('simpleShadow.jpg');
        const sphereShadow = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(new three__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry(1.5, 1.5), new three__WEBPACK_IMPORTED_MODULE_3__.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            alphaMap: simpleShadow
        }));
        sphereShadow.rotation.x = -Math.PI * 0.5;
        sphereShadow.position.y = plane.position.y + 0.01;
        this.scene.add(sphere, sphereShadow, plane);
        /**
        *Particles
        */
        //Geometry
        const particlesGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry();
        const count = 30000; //パーティクルの数
        const positions = new Float32Array(count * 3); //配列
        const colors = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10; //-0.5～0.5までの値を入れる
            colors[i] = Math.random(); //0-1の値が入る
        }
        //パーティクルのposiyionに座標を設定する,設定する属性の名前をidとして、値として持つ
        particlesGeometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_3__.BufferAttribute(positions, 3)); //先頭から3つずつ値を取って１つの要素(座標)として扱う
        particlesGeometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_3__.BufferAttribute(colors, 3)); //頂点に色を設定
        //Material
        const particlesMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.PointsMaterial();
        particlesMaterial.size = 0.1; //パーティクルのサイズ
        particlesMaterial.sizeAttenuation = true; //パーティクルを近くのパーティクルよりも小さくするかどうかを指定する
        particlesMaterial.color = new three__WEBPACK_IMPORTED_MODULE_3__.Color('#ff88cc'); //カラーをピンクに
        //particlesMaterial.map = particleTexture//テクスチャからのデータを使用してポイントの色を設定します
        particlesMaterial.transparent = true;
        particlesMaterial.alphaMap = particleTexture; //アルファマップはグレースケールのテクスチャで、表面全体の不透明度をコントロールする
        //particlesMaterial.alphaTest = 0.001
        /*alphaTest は 0 から 1 までの値で、WebGL がピクセルの透明度に応じてピクセルをレンダリングしない時期を認識できるようになります
        **この値は 0 で、ピクセルはいずれにせよレンダリングされます。0.001 のような小さな値を使用すると、アルファ値が 0 の場合、
        ピクセルはレンダリングされません：
        */
        //particlesMaterial.depthtest = false//深度テスト
        particlesMaterial.depthWrite = false; //WebGLに深度バッファにパーティクルを書き込まないように指示
        particlesMaterial.blending = three__WEBPACK_IMPORTED_MODULE_3__.AdditiveBlending; //blendingプロパティをTHREE.AdditiveBlendingに変更.ピクセルの色が重なり彩度が高くなる
        particlesMaterial.vertexColors = true; //頂点カラーを有効にする
        //Poinsts
        this.particles = new three__WEBPACK_IMPORTED_MODULE_3__.Points(particlesGeometry, particlesMaterial); //パーティクルはThree.Pointsで作る
        this.particles.position.y = -1;
        //this.particles.rotation.x=Math.PI/2  
        this.scene.add(this.particles);
        /**
         * Animate
         */
        const clock = new three__WEBPACK_IMPORTED_MODULE_3__.Clock(); //時計
        //ライトの設定
        // this.light = new THREE.DirectionalLight(0xffffff);
        // let lvec = new THREE.Vector3(1, 1, 1).normalize();
        // this.light.position.set(lvec.x, lvec.y, lvec.z);
        // this.scene.add(this.light);
        // 毎フレームのupdateを呼んで，更新
        // reqestAnimationFrame により次フレームを呼ぶ
        let update = (time) => {
            this.TorusKno.rotateX(0.01);
            const elapsedTime = clock.getElapsedTime(); //経過時間取得
            // Update the sphere
            sphere.position.x = Math.cos(elapsedTime) * 1.5;
            sphere.position.z = Math.sin(elapsedTime) * 1.5;
            sphere.position.y = Math.abs(Math.sin(elapsedTime * 3));
            // Update objects
            sphere.rotation.y = 0.1 * elapsedTime;
            TorusKno.rotation.y = 0.1 * elapsedTime;
            torus.rotation.y = 0.1 * elapsedTime;
            sphere.rotation.x = 0.15 * elapsedTime;
            //TorusKno.rotation.x = 0.15 * elapsedTime
            torus.rotation.x = 0.15 * elapsedTime;
            // Update the shadow
            sphereShadow.position.x = sphere.position.x;
            sphereShadow.position.z = sphere.position.z;
            sphereShadow.material.opacity = (1 - sphere.position.y) * 0.3;
            // Update particles
            //particles.rotation.y = elapsedTime * 0.2//y軸回転
            let geom = this.particles.geometry;
            let pos = geom.getAttribute('position');
            for (let i = 0; i < count; i++) {
                const i3 = i * 3; //positionの要素の１番目にあたる番号、y座標にアクセススト時はi3+1番目の要素を参照すればよい
                const x = this.particles.geometry.attributes.position.array[i3]; //x座標を参照して波を作る.パーティクルの数が多いとシェーダーを使う方が良い
                pos.setY(i, 0.2 * Math.sin((elapsedTime + x) * 4));
            }
            // this.particles.geometry.setAttribute('position' ,new THREE.BufferAttribute(positions,3))
            this.particles.geometry.attributes.position.needsUpdate = true; //ジオメトリが変更されたことを通知しないと変化しない
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(2 * 640, 2 * 480, new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(2, 2, 4));
    document.body.appendChild(viewport);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_dat_gui_build_dat_gui_module_js-node_modules_three_examples_jsm_controls-621ed8"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8yMUZJMDAzIOe2suS4reWEquW4jFxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5pbXBvcnQgKiBhcyBkYXQgZnJvbSBcImRhdC5ndWlcIjtcbmltcG9ydCB7IFJlY3RBcmVhTGlnaHRIZWxwZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vaGVscGVycy9SZWN0QXJlYUxpZ2h0SGVscGVyLmpzJztcblxuY2xhc3MgVGhyZWVKU0NvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBzY2VuZTogVEhSRUUuU2NlbmU7XG4gICAgcHJpdmF0ZSBnZW9tZXRyeTogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgcHJpdmF0ZSBtYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWw7XG4gICAgcHJpdmF0ZSBUb3J1c0tubzogVEhSRUUuTWVzaDtcbiAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcbiAgICBwcml2YXRlIHBhcnRpY2xlczpUSFJFRS5Qb2ludHM7XG4gICAgcHJpdmF0ZSBwYXJ0aWNsZXMyOlRIUkVFLlBvaW50cztcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIC8vIOeUu+mdoumDqOWIhuOBruS9nOaIkCjooajnpLrjgZnjgovmnqDjgZTjgajjgaspKlxuICAgIHB1YmxpYyBjcmVhdGVSZW5kZXJlckRPTSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhUG9zOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4gICAgICAgIGxldCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4MDAwMDAwKSk7XG5cbiAgICAgICAgLy/jgqvjg6Hjg6njga7oqK3lrppcbiAgICAgICAgbGV0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2lkdGggLyBoZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvcyk7XG4gICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xuXG4gICAgICAgIGxldCBvcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgICAgIC8vIOavjuODleODrOODvOODoOOBrnVwZGF0ZeOCkuWRvOOCk+OBp++8jHJlbmRlclxuICAgICAgICAvLyByZXFlc3RBbmltYXRpb25GcmFtZSDjgavjgojjgormrKHjg5Xjg6zjg7zjg6DjgpLlkbzjgbZcbiAgICAgICAgbGV0IHJlbmRlcjogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgb3JiaXRDb250cm9scy51cGRhdGUoKTtcblxuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIGNhbWVyYSk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID0gXCJsZWZ0XCI7XG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xuICAgIH1cblxuICAgIC8vIOOCt+ODvOODs+OBruS9nOaIkCjlhajkvZPjgacx5ZueKVxuICAgIHByaXZhdGUgY3JlYXRlU2NlbmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHg1NWZmMDAgfSk7XG4gICAgICAgIHRoaXMuVG9ydXNLbm8gPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcbiAgICAgICAgLy90aGlzLlRvcnVzS25vLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICAvL3RoaXMuc2NlbmUuYWRkKHRoaXMuVG9ydXNLbm8pO1xuXG4gICAgICAgIC8v44Kz44Oz44OI44Ot44O844OrXG4gICAgICAgIGNvbnN0IGd1aSA9IG5ldyBkYXQuR1VJKClcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaWdodHNcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuNSk7Ly8o6ImyLOWFieOBruW8t+OBlSlcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgICAgICBndWkuYWRkKGFtYmllbnRMaWdodCwnaW50ZW5zaXR5JykubWluKDApLm1heCgxKS5zdGVwKDAuMDEpO1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweDAwZmZmYywwLjMpO1xuICAgICAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgxLDAuMjUsMCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xuXG4gICAgICAgIGNvbnN0IGhlbWlzcGhlcmVMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHhmZjAwMDAsMHgwMDAwZmYsMC4zKTsvLyjniYflgbTjga7oibLjgIHjgoLjgYbniYfmlrnjga7oibLjgIHlvLfjgZUpXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGhlbWlzcGhlcmVMaWdodCk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmY5MDAwLDAuNSwxMCwyKTsvLyjoibLjgIHlvLfjgZXjgIHmuJvoobDot53pm6Is5rib6KGw6YCf5bqmKVxuICAgICAgICBwb2ludExpZ2h0LnBvc2l0aW9uLnNldCgwLjUsLTAuNSwxKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodCk7XG5cbiAgICAgICAgY29uc3QgcmVjdEFyZWFMaWdodCA9IG5ldyBUSFJFRS5SZWN0QXJlYUxpZ2h0KDB4NGUwMGZmLDIsMSwxKTtcbiAgICAgICAgcmVjdEFyZWFMaWdodC5wb3NpdGlvbi5zZXQoLTEuNSwwLDEuNSk7XG4gICAgICAgIHJlY3RBcmVhTGlnaHQubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKCkpXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJlY3RBcmVhTGlnaHQpO1xuXG4gICAgICAgIGNvbnN0IHNwb3RMaWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHg3OGZmMDAsMC41LDYsTWF0aC5QSSowLjEsIDAuMjUsMSk7XG4gICAgICAgIHNwb3RMaWdodC5wb3NpdGlvbi5zZXQoMCwyLDMpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChzcG90TGlnaHQpO1xuICAgICAgICBcblxuICAgICAgICBzcG90TGlnaHQudGFyZ2V0LnBvc2l0aW9uLnggPSAtIDAuNzU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHNwb3RMaWdodC50YXJnZXQpO1xuXG4gICAgICAgIC8vSGVscGVyc1xuICAgICAgICBjb25zdCBoZW1pc3BoZXJlTGlnaHRIZWxwZXIgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0SGVscGVyKGhlbWlzcGhlcmVMaWdodCwgMC4yKVxuICAgICAgICB0aGlzLnNjZW5lLmFkZChoZW1pc3BoZXJlTGlnaHRIZWxwZXIpXG5cbiAgICAgICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodEhlbHBlciA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0SGVscGVyKGRpcmVjdGlvbmFsTGlnaHQsIDAuMilcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodEhlbHBlcilcblxuICAgICAgICBjb25zdCBwb2ludExpZ2h0SGVscGVyID0gbmV3IFRIUkVFLlBvaW50TGlnaHRIZWxwZXIocG9pbnRMaWdodCwgMC4yKVxuICAgICAgICB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0SGVscGVyKVxuXG4gICAgICAgIGNvbnN0IHNwb3RMaWdodEhlbHBlciA9IG5ldyBUSFJFRS5TcG90TGlnaHRIZWxwZXIoc3BvdExpZ2h0KVxuICAgICAgICB0aGlzLnNjZW5lLmFkZChzcG90TGlnaHRIZWxwZXIpXG5cbiAgICAgICAgY29uc3QgcmVjdEFyZWFMaWdodEhlbHBlciA9IG5ldyBSZWN0QXJlYUxpZ2h0SGVscGVyKHJlY3RBcmVhTGlnaHQpXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJlY3RBcmVhTGlnaHRIZWxwZXIpXG5cbiAgICAgICAgZGlyZWN0aW9uYWxMaWdodEhlbHBlci52aXNpYmxlPWZhbHNlXG4gICAgICAgIGhlbWlzcGhlcmVMaWdodEhlbHBlci52aXNpYmxlPWZhbHNlXG4gICAgICAgIHBvaW50TGlnaHRIZWxwZXIudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgIHNwb3RMaWdodEhlbHBlci52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgcmVjdEFyZWFMaWdodEhlbHBlci52aXNpYmxlPWZhbHNlXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYmplY3RzXG4gICAgICAgICAqL1xuICAgICAgICAvLyBNYXRlcmlhbFxuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCgpXG4gICAgICAgIG1hdGVyaWFsLnJvdWdobmVzcyA9IDAuNFxuXG4gICAgICAgIC8vIE9iamVjdHNcbiAgICAgICAgY29uc3Qgc3BoZXJlID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgICAgICBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC41LCAzMiwgMzIpLFxuICAgICAgICAgICAgbWF0ZXJpYWxcbiAgICAgICAgKVxuICAgICAgICAvL3NwaGVyZS5wb3NpdGlvbi54ID0gLSAxLjVcblxuICAgICAgICBjb25zdCBUb3J1c0tubyA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICAgICAgbmV3IFRIUkVFLlRvcnVzS25vdEdlb21ldHJ5KDAuNCwwLjIpLFxuICAgICAgICAgICAgbWF0ZXJpYWxcbiAgICAgICAgKVxuICAgICAgICBUb3J1c0tuby5wb3NpdGlvbi55ID0gMC4xXG4gICAgICAgIGNvbnN0IHRvcnVzID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgICAgICBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSgwLjMsIDAuMiwgMzIsIDY0KSxcbiAgICAgICAgICAgIG1hdGVyaWFsXG4gICAgICAgIClcbiAgICAgICAgdG9ydXMucG9zaXRpb24ueCA9IDEuNVxuXG4gICAgICAgIGNvbnN0IHBsYW5lID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgICAgICBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg1LCA1KSxcbiAgICAgICAgICAgIG1hdGVyaWFsXG4gICAgICAgIClcbiAgICAgICAgcGxhbmUucm90YXRpb24ueCA9IC0gTWF0aC5QSSAqIDAuNVxuICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gLSAwLjY1XG4gICAgICAgIFxuICAgICAgICBcbiAgICBcblxuICAgICAgICB0aGlzLnNjZW5lLmFkZChzcGhlcmUsIFRvcnVzS25vLCBwbGFuZSlcbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIC8v44OR44O844OG44Kj44Kv44Or44Gu5rOiXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZXh0dXJlc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKClcbiAgICAgICAgY29uc3QgcGFydGljbGVUZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKCcyLnBuZycpLy/jg4bjgq/jgrnjg4Hjg6PjgpLjg63jg7zjg4lcblxuICAgICAgICBjb25zdCBzaW1wbGVTaGFkb3cgPSB0ZXh0dXJlTG9hZGVyLmxvYWQoJ3NpbXBsZVNoYWRvdy5qcGcnKVxuICAgICAgICBjb25zdCBzcGhlcmVTaGFkb3cgPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgICAgIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEuNSwgMS41KSxcbiAgICAgICAgICAgIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgICAgICAgICAgY29sb3I6IDB4MDAwMDAwLFxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhTWFwOiBzaW1wbGVTaGFkb3dcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgc3BoZXJlU2hhZG93LnJvdGF0aW9uLnggPSAtIE1hdGguUEkgKiAwLjVcbiAgICAgICAgc3BoZXJlU2hhZG93LnBvc2l0aW9uLnkgPSBwbGFuZS5wb3NpdGlvbi55ICsgMC4wMVxuXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHNwaGVyZSwgc3BoZXJlU2hhZG93LCBwbGFuZSlcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAqUGFydGljbGVzXG4gICAgICAgICovXG4gICAgICAgIC8vR2VvbWV0cnlcbiAgICAgICAgY29uc3QgcGFydGljbGVzR2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKVxuICAgICAgICBjb25zdCBjb3VudCA9IDMwMDAwLy/jg5Hjg7zjg4bjgqPjgq/jg6vjga7mlbBcblxuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogMykvL+mFjeWIl1xuICAgICAgICBjb25zdCBjb2xvcnMgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogMylcblxuICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBjb3VudCAqIDM7aSsrKXtcbiAgICAgICAgICAgIHBvc2l0aW9uc1tpXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwLy8tMC41772eMC4144G+44Gn44Gu5YCk44KS5YWl44KM44KLXG4gICAgICAgICAgICBjb2xvcnNbaV09TWF0aC5yYW5kb20oKS8vMC0x44Gu5YCk44GM5YWl44KLXG4gICAgICAgIH1cbiAgICAgICAgLy/jg5Hjg7zjg4bjgqPjgq/jg6vjga5wb3NpeWlvbuOBq+W6p+aomeOCkuioreWumuOBmeOCiyzoqK3lrprjgZnjgovlsZ7mgKfjga7lkI3liY3jgpJpZOOBqOOBl+OBpuOAgeWApOOBqOOBl+OBpuaMgeOBpFxuICAgICAgICBwYXJ0aWNsZXNHZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyAsbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsMykpLy/lhYjpoK3jgYvjgokz44Gk44Ga44Gk5YCk44KS5Y+W44Gj44Gm77yR44Gk44Gu6KaB57SgKOW6p+aomSnjgajjgZfjgabmibHjgYZcbiAgICAgICAgcGFydGljbGVzR2VvbWV0cnkuc2V0QXR0cmlidXRlKCdjb2xvcicsbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvcnMsMykpLy/poILngrnjgavoibLjgpLoqK3lrppcblxuICAgICAgICAvL01hdGVyaWFsXG4gICAgICAgIGNvbnN0IHBhcnRpY2xlc01hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKClcbiAgICAgICAgcGFydGljbGVzTWF0ZXJpYWwuc2l6ZSA9IDAuMS8v44OR44O844OG44Kj44Kv44Or44Gu44K144Kk44K6XG4gICAgICAgIHBhcnRpY2xlc01hdGVyaWFsLnNpemVBdHRlbnVhdGlvbiA9IHRydWUvL+ODkeODvOODhuOCo+OCr+ODq+OCkui/keOBj+OBruODkeODvOODhuOCo+OCr+ODq+OCiOOCiuOCguWwj+OBleOBj+OBmeOCi+OBi+OBqeOBhuOBi+OCkuaMh+WumuOBmeOCi1xuICAgICAgICBwYXJ0aWNsZXNNYXRlcmlhbC5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcignI2ZmODhjYycpLy/jgqvjg6njg7zjgpLjg5Tjg7Pjgq/jgatcbiAgICAgICAgLy9wYXJ0aWNsZXNNYXRlcmlhbC5tYXAgPSBwYXJ0aWNsZVRleHR1cmUvL+ODhuOCr+OCueODgeODo+OBi+OCieOBruODh+ODvOOCv+OCkuS9v+eUqOOBl+OBpuODneOCpOODs+ODiOOBruiJsuOCkuioreWumuOBl+OBvuOBmVxuICAgICAgICBwYXJ0aWNsZXNNYXRlcmlhbC50cmFuc3BhcmVudCA9IHRydWVcbiAgICAgICAgcGFydGljbGVzTWF0ZXJpYWwuYWxwaGFNYXAgPSBwYXJ0aWNsZVRleHR1cmUvL+OCouODq+ODleOCoeODnuODg+ODl+OBr+OCsOODrOODvOOCueOCseODvOODq+OBruODhuOCr+OCueODgeODo+OBp+OAgeihqOmdouWFqOS9k+OBruS4jemAj+aYjuW6puOCkuOCs+ODs+ODiOODreODvOODq+OBmeOCi1xuICAgICAgICAvL3BhcnRpY2xlc01hdGVyaWFsLmFscGhhVGVzdCA9IDAuMDAxXG4gICAgICAgIC8qYWxwaGFUZXN0IOOBryAwIOOBi+OCiSAxIOOBvuOBp+OBruWApOOBp+OAgVdlYkdMIOOBjOODlOOCr+OCu+ODq+OBrumAj+aYjuW6puOBq+W/nOOBmOOBpuODlOOCr+OCu+ODq+OCkuODrOODs+ODgOODquODs+OCsOOBl+OBquOBhOaZguacn+OCkuiqjeitmOOBp+OBjeOCi+OCiOOBhuOBq+OBquOCiuOBvuOBmVxuICAgICAgICAqKuOBk+OBruWApOOBryAwIOOBp+OAgeODlOOCr+OCu+ODq+OBr+OBhOOBmuOCjOOBq+OBm+OCiOODrOODs+ODgOODquODs+OCsOOBleOCjOOBvuOBmeOAgjAuMDAxIOOBruOCiOOBhuOBquWwj+OBleOBquWApOOCkuS9v+eUqOOBmeOCi+OBqOOAgeOCouODq+ODleOCoeWApOOBjCAwIOOBruWgtOWQiOOAgVxuICAgICAgICDjg5Tjgq/jgrvjg6vjga/jg6zjg7Pjg4Djg6rjg7PjgrDjgZXjgozjgb7jgZvjgpPvvJpcbiAgICAgICAgKi9cbiAgICAgICAgLy9wYXJ0aWNsZXNNYXRlcmlhbC5kZXB0aHRlc3QgPSBmYWxzZS8v5rex5bqm44OG44K544OIXG4gICAgICAgIHBhcnRpY2xlc01hdGVyaWFsLmRlcHRoV3JpdGUgPSBmYWxzZS8vV2ViR0zjgavmt7Hluqbjg5Djg4Pjg5XjgqHjgavjg5Hjg7zjg4bjgqPjgq/jg6vjgpLmm7jjgY3ovrzjgb7jgarjgYTjgojjgYbjgavmjIfnpLpcbiAgICAgICAgcGFydGljbGVzTWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nLy9ibGVuZGluZ+ODl+ODreODkeODhuOCo+OCklRIUkVFLkFkZGl0aXZlQmxlbmRpbmfjgavlpInmm7Qu44OU44Kv44K744Or44Gu6Imy44GM6YeN44Gq44KK5b2p5bqm44GM6auY44GP44Gq44KLXG4gICAgICAgIHBhcnRpY2xlc01hdGVyaWFsLnZlcnRleENvbG9ycyA9IHRydWUvL+mggueCueOCq+ODqeODvOOCkuacieWKueOBq+OBmeOCi1xuXG4gICAgICAgIC8vUG9pbnN0c1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBUSFJFRS5Qb2ludHMocGFydGljbGVzR2VvbWV0cnkscGFydGljbGVzTWF0ZXJpYWwpLy/jg5Hjg7zjg4bjgqPjgq/jg6vjga9UaHJlZS5Qb2ludHPjgafkvZzjgotcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMucG9zaXRpb24ueT0tMVxuICAgICAgICAvL3RoaXMucGFydGljbGVzLnJvdGF0aW9uLng9TWF0aC5QSS8yICBcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wYXJ0aWNsZXMpXG4gIFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbmltYXRlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpLy/mmYLoqIhcblxuXG4gICAgICAgIC8v44Op44Kk44OI44Gu6Kit5a6aXG4gICAgICAgIC8vIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4gICAgICAgIC8vIGxldCBsdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkubm9ybWFsaXplKCk7XG4gICAgICAgIC8vIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KGx2ZWMueCwgbHZlYy55LCBsdmVjLnopO1xuICAgICAgICAvLyB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcblxuICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIzmm7TmlrBcbiAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4gICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuVG9ydXNLbm8ucm90YXRlWCgwLjAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZWxhcHNlZFRpbWUgPSBjbG9jay5nZXRFbGFwc2VkVGltZSgpLy/ntYzpgY7mmYLplpPlj5blvpdcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHNwaGVyZVxuICAgICAgICBzcGhlcmUucG9zaXRpb24ueCA9IE1hdGguY29zKGVsYXBzZWRUaW1lKSAqIDEuNVxuICAgICAgICBzcGhlcmUucG9zaXRpb24ueiA9IE1hdGguc2luKGVsYXBzZWRUaW1lKSAqIDEuNVxuICAgICAgICBzcGhlcmUucG9zaXRpb24ueSA9IE1hdGguYWJzKE1hdGguc2luKGVsYXBzZWRUaW1lICogMykpXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBvYmplY3RzXG4gICAgICAgICAgICBzcGhlcmUucm90YXRpb24ueSA9IDAuMSAqIGVsYXBzZWRUaW1lXG4gICAgICAgICAgICBUb3J1c0tuby5yb3RhdGlvbi55ID0gMC4xICogZWxhcHNlZFRpbWVcbiAgICAgICAgICAgIHRvcnVzLnJvdGF0aW9uLnkgPSAwLjEgKiBlbGFwc2VkVGltZVxuXG4gICAgICAgICAgICBzcGhlcmUucm90YXRpb24ueCA9IDAuMTUgKiBlbGFwc2VkVGltZVxuICAgICAgICAgICAgLy9Ub3J1c0tuby5yb3RhdGlvbi54ID0gMC4xNSAqIGVsYXBzZWRUaW1lXG4gICAgICAgICAgICB0b3J1cy5yb3RhdGlvbi54ID0gMC4xNSAqIGVsYXBzZWRUaW1lXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc2hhZG93XG4gICAgICAgICAgICBzcGhlcmVTaGFkb3cucG9zaXRpb24ueCA9IHNwaGVyZS5wb3NpdGlvbi54XG4gICAgICAgICAgICBzcGhlcmVTaGFkb3cucG9zaXRpb24ueiA9IHNwaGVyZS5wb3NpdGlvbi56XG4gICAgICAgICAgICBzcGhlcmVTaGFkb3cubWF0ZXJpYWwub3BhY2l0eSA9ICgxIC0gc3BoZXJlLnBvc2l0aW9uLnkpICogMC4zXG5cbiAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgcGFydGljbGVzXG4gICAgICAgICAgICAvL3BhcnRpY2xlcy5yb3RhdGlvbi55ID0gZWxhcHNlZFRpbWUgKiAwLjIvL3nou7jlm57ou6JcbiAgICAgICAgICAgIGxldCBnZW9tID0gPFRIUkVFLkJ1ZmZlckdlb21ldHJ5PnRoaXMucGFydGljbGVzLmdlb21ldHJ5XG4gICAgICAgICAgICBsZXQgcG9zID0gZ2VvbS5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBjb3VudDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgY29uc3QgaTMgPSBpICogMy8vcG9zaXRpb27jga7opoHntKDjga7vvJHnlarnm67jgavjgYLjgZ/jgovnlarlj7fjgIF55bqn5qiZ44Gr44Ki44Kv44K744K544K544OI5pmC44GvaTMrMeeVquebruOBruimgee0oOOCkuWPgueFp+OBmeOCjOOBsOOCiOOBhFxuICAgICAgICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5wYXJ0aWNsZXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheVtpM10vL3jluqfmqJnjgpLlj4LnhafjgZfjgabms6LjgpLkvZzjgosu44OR44O844OG44Kj44Kv44Or44Gu5pWw44GM5aSa44GE44Go44K344Kn44O844OA44O844KS5L2/44GG5pa544GM6Imv44GEXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcG9zLnNldFkoaSwwLjIqTWF0aC5zaW4oKGVsYXBzZWRUaW1lICsgeCkqNCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnBhcnRpY2xlcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyAsbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsMykpXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZS8v44K444Kq44Oh44OI44Oq44GM5aSJ5pu044GV44KM44Gf44GT44Go44KS6YCa55+l44GX44Gq44GE44Go5aSJ5YyW44GX44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gbmV3IFRocmVlSlNDb250YWluZXIoKTtcblxuICAgIGxldCB2aWV3cG9ydCA9IGNvbnRhaW5lci5jcmVhdGVSZW5kZXJlckRPTSgyKjY0MCwgMio0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDIsIDIsIDQpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZpZXdwb3J0KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2dwcmVuZGVyaW5nXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NncHJlbmRlcmluZ1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZGF0X2d1aV9idWlsZF9kYXRfZ3VpX21vZHVsZV9qcy1ub2RlX21vZHVsZXNfdGhyZWVfZXhhbXBsZXNfanNtX2NvbnRyb2xzLTYyMWVkOFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==