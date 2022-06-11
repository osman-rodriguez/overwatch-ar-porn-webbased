$(document).ready(function() {

	$(document).ready(function() {
		$('#loadingEl').attr("visible", "false");
	});

	$("#ANA1").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/ana1.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#ANA2").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/ana2.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#DVA1").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/dva1.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#DVA2").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/dva2.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#MEI1").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/mei1.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#MEI2").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/mei2.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#MERCY1").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/mercy1.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#MERCY2").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/mercy2.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#PHARAH1").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/pharah1.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#PHARAH2").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/pharah2.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#SOMBRA").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/sombra%201.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#SYMMETRA").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/symetra1.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#TRACER1").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/tracer1.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
	$("#TRACER2").click(function() {
		$('#loadingEl').attr("visible", "true");
		$('#puta').attr('gltf-model', 'https://ozmatech.com/digitalmedia/demos/overwatch-arporn/assets/models/tracer2.glb');
		document.getElementById('puta').addEventListener('model-loaded', function() {
			$('#loadingEl').attr("visible", "false")
		});
	});
});