<?php
	session_start();
	if (isset($_SESSION['user_id']) && isset($_SESSION['user_project'])){
		$id = $_SESSION['user_id'];
		$project = $_SESSION['user_project'];
	} else {
		$id = 'sessionVariables';
		$project = 'AreNotSet';
	}
	
	$dir = '../../slide/'.$id.$project.'/';
	$dlist = getDirs($dir);
	if ($dlist < 0){
		echo 'Not found directory: '.$dir;
		return;
	}
	for ($i=0, $indice=0; $i<count($dlist); $i++){
		$flist = getFiles($dlist[$i]);
		for ($j=0; $j<count($flist); $j++){
			echo "<li><a class=\"preview\" href=\"".$flist[$j]."\" title=\"".($indice+1)."\"><img width=\"150\" height=\"102\" src=\"".$flist[$j]."\" alt=\"img".$indice."\" draggable=\"true\" class=\"image".$indice."\"/></a></li>";
			$indice++;
		}
	}
	
	/* @return: all the subdirectories paths of $dir */
	function getDirs($dir){
		if(!is_dir($dir))
			return -1;
		else {
			$dh = opendir($dir);
			
			while (false !== ($file = readdir($dh))){
				if ($file != '.' && $file != '..'){
					if(is_dir($dir.$file))
						$dlist[] = $dir.$file;
					/*else
						$flist[] = $dir.$file; */
				}
			}
			
			if (is_array($dlist)){
				sort($dlist);
				$dlist = numberSort($dlist, '/', -2);
			}
			
			return ($dlist);
		}
	}
	
	function numberSort($list, $prefix, $dist){
		$listL = array();
		$listTmp = array();
		$c = count($list);
		
		for($i=0; $i<$c; $i++){
			$tmp = substr($list[$i], $dist);
			if($tmp[0]==$prefix[0]) array_push($listL, $list[$i]);
			else array_push($listTmp, $list[$i]);
		}
		
		$c = count($listTmp);
		for($i=0; $i<$c; $i++)
			array_push($listL, $listTmp[$i]);
		return $listL;
	}
	
	/* @return: all the file paths of $dir */
	function getFiles($dir){
		$dir = $dir.'/';
		if(!is_dir($dir))
			return 'Directory not found: '.$dir;
		else {
			$dh = opendir($dir);
			
			while (false !== ($file = readdir($dh))){
				if ($file != '.' && $file != '..'){
					/*if(is_dir($dir.$file))
						$dlist[] = $dir.$file;
					else */
					if(strcmp($file,"Thumbs.db")!=0)
						$flist[] = $dir.$file;
				}
			}
			
			if (is_array($flist)) sort($flist);
			$flist = numberSort($flist, '_', -6);
			
			return ($flist);
		}
	}
?>
