
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x336699);
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
var threepad = renderer.domElement;
document.body.appendChild(threepad);


threepad.style.position = "fixed";
threepad.style.bottom = "0px";
threepad.style.zIndex = "-1";


//**Particles****

var SEPARATION = 78, AMOUNTX = 50, AMOUNTY = 57;
var particles, particle, count = 0;

particles = new Array();
var PI2 = Math.PI * 2;
var spriteMap = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/2000px-Circle_-_black_simple.svg.png');
var material = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff });

var i = 0;

for (var ix = 0; ix < AMOUNTX; ix++) {

    for (var iy = 0; iy < AMOUNTY; iy++) {

        particle = particles[i++] = new THREE.Sprite(material);
        particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
        particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
        scene.add(particle);

    }

}


//**Scene Camera Congigurations
camera.position.z = 3000;
camera.position.y = 0;
camera.rotation.x = -0.2;
//**Scene Camera Configurations

function renderu() {
    requestAnimationFrame(renderu);

    var i = 0;

    for (var ix = 0; ix < AMOUNTX; ix++) {

        for (var iy = 0; iy < AMOUNTY; iy++) {

            particle = particles[i++];
            particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
            particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 3 + (Math.sin((iy + count) * 0.5) + 1) * 1;
        }

    }

    renderer.render(scene, camera);

    count += 0.1;
}

renderu();
