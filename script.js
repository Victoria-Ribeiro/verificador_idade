function verificar(){
	var data= new Date()
	var ano = data.getFullYear()
	var fano= window.document.getElementById('txtano')
	var res= document.querySelector('div#res')


	if (fano.value == null  ||  Number(fano.value)> ano) {
		window.alert('[ERRO] Verifique os dados e tente novamente')

	}

	else{
		var fsex= document.getElementsByName('radiosex')
		var idade= ano- Number(fano.value)
		var img= document.createElement('img')
		img.setAttribute('id', 'img')

		if (fsex[0].checked) {
			genero= 'Homem'
			
			if (idade>=0 && idade<10) {
				//criança			
				img.setAttribute( 'src','homemcrianca.png')			
			}

			else if (idade <21){
				//jovem
				img.setAttribute('src', 'homemjovem.png')		
			}
			else if (idade <50){
				//adulto
				img.setAttribute('src', 'homemadulto.png')		
			}

			else {
				//idoso
				img.setAttribute('src', 'homemidoso.png')		
			}

	    	}else{

			genero= 'Mulher '
			if (idade>=0 && idade<10) {
				//criança		
				img.setAttribute( 'src','mulhercrianca.png')					
			}

			else if (idade <21){
				//jovem
				img.setAttribute( 'src','mulherjovem.png')	
			}
			else if (idade <50){
				//adulto
				img.setAttribute( 'src','mulheradulto.png')	
			}

			else {
				//idoso
				img.setAttribute( 'src','mulheridoso.png')	
			}
			
		}
			res.style.textAlign= 'center'
			res.innerHTML= 'Detectamos '+ genero+ ' com '+idade+ ' anos.'
			res.appendChild(img)

	}
			
}