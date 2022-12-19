function al(){
    var first = document.getElementById('first').style.display = 'block';
    var second = document.getElementById('second').style.display = 'block';
    var third = document.getElementById('third').style.display = 'block';
    var fourth = document.getElementById('fourth').style.display = 'block';
    var fifth = document.getElementById('fifth').style.display = 'block';
    var checkBack = document.getElementById('checkBack').style.display = 'none';

    var all = document.getElementById('all').style.color = '#5a4fff';
    var service = document.getElementById('service').style.color = '#888694';
    var eng = document.getElementById('eng').style.color = '#888694';
    var operate = document.getElementById('operate').style.color = '#888694';
    var design = document.getElementById('design').style.color = '#888694';
}

function service(){
    var first = document.getElementById('first').style.display = 'block';
    var second = document.getElementById('second').style.display = 'block';
    var third = document.getElementById('third').style.display = 'block';
    var fourth = document.getElementById('fourth').style.display = 'block';
    var fifth = document.getElementById('fifth').style.display = 'none';
    var checkBack = document.getElementById('checkBack').style.display = 'none';

    var all = document.getElementById('all').style.color = '#888694';
    var service = document.getElementById('service').style.color = '#5a4fff';
    var eng = document.getElementById('eng').style.color = '#888694';
    var operate = document.getElementById('operate').style.color = '#888694';
    var design = document.getElementById('design').style.color = '#888694';
}

function eng(){
    var first = document.getElementById('first').style.display = 'none';
    var second = document.getElementById('second').style.display = 'none';
    var third = document.getElementById('third').style.display = 'none';
    var fourth = document.getElementById('fourth').style.display = 'none';
    var fifth = document.getElementById('fifth').style.display = 'none';
    var checkBack = document.getElementById('checkBack').style.display = 'flex';

    var all = document.getElementById('all').style.color = '#888694';
    var service = document.getElementById('service').style.color = '#888694';
    var eng = document.getElementById('eng').style.color = '#5a4fff';
    var operate = document.getElementById('operate').style.color = '#888694';
    var design = document.getElementById('design').style.color = '#888694';
}

function operate(){
    var first = document.getElementById('first').style.display = 'none';
    var second = document.getElementById('second').style.display = 'none';
    var third = document.getElementById('third').style.display = 'none';
    var fourth = document.getElementById('fourth').style.display = 'none';
    var fifth = document.getElementById('fifth').style.display = 'none';
    var checkBack = document.getElementById('checkBack').style.display = 'flex';

    var all = document.getElementById('all').style.color = '#888694';
    var service = document.getElementById('service').style.color = '#888694';
    var eng = document.getElementById('eng').style.color = '#888694';
    var operate = document.getElementById('operate').style.color = '#5a4fff';
    var design = document.getElementById('design').style.color = '#888694';
}

function design(){
    var first = document.getElementById('first').style.display = 'none';
    var second = document.getElementById('second').style.display = 'none';
    var third = document.getElementById('third').style.display = 'none';
    var fourth = document.getElementById('fourth').style.display = 'none';
    var fifth = document.getElementById('fifth').style.display = 'block';
    var checkBack = document.getElementById('checkBack').style.display = 'none';

    var all = document.getElementById('all').style.color = '#888694';
    var service = document.getElementById('service').style.color = '#888694';
    var eng = document.getElementById('eng').style.color = '#888694';
    var operate = document.getElementById('operate').style.color = '#888694';
    var design = document.getElementById('design').style.color = '#5a4fff';
}

function submit(){
    if(document.form.textview.value == ''){
        alert('Please fill out the required field: email-footer');
    }
    else{
        alert('Thanks for sharing your email');
    }
}

function smooth(){
    const anchors = document.querySelectorAll('a[href*="#"]')
    for(let anchor of anchors){
        anchor.addEventListener("click", function(event){
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }       
}