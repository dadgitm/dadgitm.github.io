carouselFun = function (folder) {
    source = './assets/img/';
    fetch(source + folder).then((res) => res.text()).then(res => {
        let allFiles = res.toString();
        let pos = allFiles.indexOf('mainPage')
        allFiles = allFiles.slice(pos + 1)
        pos = allFiles.indexOf('mainPage')
        allFiles = allFiles.slice(pos + 1)
        pos = allFiles.indexOf('mainPage')
        allFiles = allFiles.slice(pos + 1)
        // console.log(allFiles, pos)
        let i = 0;
        var li = [];
        var img = [];
        let carouselInner = document.createElement('div')
        let carouselItem = []
        carouselInner.setAttribute('class', 'carousel-inner')
        let OL = document.createElement('ol');
        OL.setAttribute('class', 'carousel-indicators')
        while (pos > 1) {
            pos = allFiles.indexOf(folder)
            pos1 = allFiles.indexOf('"', pos)

            li[i] = document.createElement('li');
            li[i].setAttribute('data-target', "#carouselExampleIndicators")
            li[i].setAttribute('data-slide-to', i)
            carouselItem[i] = document.createElement('div');
            carouselItem[i].setAttribute('class', 'carousel-item')

            if (i == 0) {
                li[i].setAttribute('class', "active");
                carouselItem[i].setAttribute('class', 'carousel-item active')
            }

            img[i] = new Image();
            img[i].src = source + allFiles.slice(pos, pos1);
            img[i].alt = (i + 1) + 'Slide';
            img[i].setAttribute('class', 'd-block w-100')

            carouselItem[i].append(img[i])
            carouselInner.append(carouselItem[i])

            OL.appendChild(li[i]);

            console.log(i)
            i++;
            allFiles = allFiles.slice(pos + 1)
            if (allFiles.indexOf('mainPage') == -1) {
                pos = 0
            }
        }
        Div = document.createElement('div');
        Div.innerHTML = '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>';
        Div.append(carouselInner);
        Div.append(OL);
        console.log(Div)
        document.getElementById('carouselExampleIndicators').innerHTML = "";
        document.getElementById('carouselExampleIndicators').append(Div);
    })
}