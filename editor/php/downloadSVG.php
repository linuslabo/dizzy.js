<?php
if (isset($_POST['svg'])){
	$svg = $_POST['svg'];
	//$svg = stripcslashes($svg); just needed on some hosting server
	$nome = "presentation";
	/*$write_file = fopen($nome.".svg","w");
	fwrite($write_file,$svg);
	fclose($write_file);*/
	$zip = new ZipArchive();
	$file = $nome.".zip";
	$svg = preg_replace('/NS1:/', '', $svg, 1); //fixes Opera Namespace
	if ($zip->open($file, ZIPARCHIVE::CREATE)===TRUE) {
		$zip->addFromString("presentation.svg", $svg);
		//$zip->addFromString("aggiornato.txt", "oK");
		//$zip->addFile('fileName.txt', 'fileNameInTheArchive.txt');
		$zip->close();
	}else echo "Compression error";
	echo $file;
}
?>
