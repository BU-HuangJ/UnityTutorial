#pragma strict

function LateUpdate ()
{
	if (!audio.isPlaying || Input.anyKeyDown)
	Application.LoadLevel("StartMenu");
}

function Start () {

}

function Update () {

}