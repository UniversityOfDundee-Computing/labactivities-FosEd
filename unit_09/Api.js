function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }
  const ul = document.getElementById('films');
  const url = 'https://www.omdbapi.com/?apikey=f826e5eb&s=Harry+Potter';
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data);
      let films = data.Search;
      console.log(films[0].Title);

        return films.map(function(data, index, arr){
            console.log(films[index]);
            let li = createNode('li'),
            span = createNode('span'),
            poster = createNode('img')

            poster.src = `${films[index].Poster}`;
            console.log(poster);
            span.innerHTML = `${films[index].Title}` + " (" + `${films[index].Year}` +")";
            
            console.log(span);
            append(li, span);
            append(li, poster);
            append(ul, li);
        });
    })
    .catch(function(error) {
      console.log(error);
    });

    