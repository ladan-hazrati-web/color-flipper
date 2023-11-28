 function _rand() {
            let x = Math.floor(Math.random() * 256)
            return x
        }
        function para() {
            let r = _rand()
            let g = _rand()
            let b = _rand()
            document.getElementById('main').style.background = `rgb(${r} ,${g} ,${b})`
            document.getElementById('text').innerHTML = `rgb(${r} ,${g} ,${b})`
        }