#pragma strict

var client : System.Net.Sockets.TcpClient = null;

function Start () {
	 client = new System.Net.Sockets.TcpClient("129.62.150.24", 5000);
}

function Update () {

}

function GetBytes(str : String)
{
    var bytes = System.Text.Encoding.UTF8.GetBytes(str);
    return bytes;
}

function GetString(bytes : byte[])
{
    var str = System.Text.Encoding.UTF8.GetString(bytes);
    return str;
}

function SendData() {
	var stream : System.Net.Sockets.NetworkStream = client.GetStream();
	var data = GetBytes("ChatMessage 4 11 Hello world\r\n");
	stream.Write(data, 0, data.Length);
	//stream.Read();
}