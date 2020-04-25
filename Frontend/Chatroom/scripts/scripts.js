var appID = "619c8efe46194f1f8a8b970b1a6b50bd"

/**
* @name handleFail
* @param err - error thrown by any function
* @description Helper function to handle erros
*/
let handleFail = function(err){
	console.log("Error : ", err)
}

//Queries the container in which the remote feeds belong
let remoteContainer = document.getElementById("remote-container");
let canvasContainter = document.getElementById("canvas-containter");

/**
* @name addVideoStream
* @param streamId
* @description Helper function to add the video to "remote-container"
*/
function addVideoStream(streamId){
	let streamDiv = document.createElement("div"); // Create a new div for every stream
	streamDiv.id = streamId;					   // Assigning id to div
	streamDiv.style.transform = "rotateY(180deg)"; // Takes care of lateral inversion (mirror image)
	remoteContainer.appendChild(streamDiv);		   // Add new div to container
}

/**
* @name removeVideoStream
* @param evt - Remove event
* @description Helper function to remove the video stream from "remote-container"
*/
function removeVideoStream(evt) {
	let stream = evt.stream;
	stream.stop();
	let remDiv = document.getElementById(stream.getId());
	remDiv.parentNode.removeChild(remDiv);
	console.log("Remote stream is removed " +stream.getId());
}

/**
* @name addCanvas
* @param streamId
* @description Helper function to render the video stream to a canvas
*/
funciton addCanvas(streamId) {
	let video = document.getElementById('video${streamId}');
	let canvas = document.createElement('canvas');
	canvasContainer.appendChild(canvas);
	let ctx = canvas.getContext('2d');

	video.addEventListener('loadedmetadata', function() {
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
	});

	video.addEventListener('play', function() {
		var $this = this; // cache
		(function loop() {
			if (!$this.paused && !$this.ended) {
				if($this.widows !== canvas.width) {
					canvas.width = video.videoWidth;
					canvas.height = video.videoHeight;
				}
				ctx.drawImage($this, 0 , 0);
				setTimeout(loop, 1000 / 30); //drawing at 30fps
			}
		})();
	}, 0);
}


let client = AgoraRTC.createClient({
	mode:'live',
	codec:'h264'
});

client.init(appID, ()=>console.log("Client initialized !"));  // Pass variable for App ID

client.join(null, 'agora-classroom', null, (uid)=>{
	let localStream = AgoraRTC.createStream({
		streamID:uid,
		audio:true,
		video:true,
		screen:false
	});

	localStream.init(function () {
		localStream.play('me');
		client.publish(localStream.handleFail);

		client.on('stream-added', function(evt) {
			client.subscribe(evt.srream.handleFail);
		});
		client.on('stream-subscribed', function(evt) {
			let stream = evt.stream;
			addVideoStream(stream.getId());
			addCanvas(stream.getId());
		});

		client.on('steram-removed', removeVideoStream);
	}, handleFail)
}, handleFail);
