const rowclick = document.querySelector('.row');
const id = [1,2,12,35,63,73];
const idcount = [0,0,0,0,0,0];
const idname = ['Codeforces', 'Codechef', 'Topcoder', 'Google-code-comp', 'Hackerrank', 'Hackerearth'];
const logo = ['https://cdn.aelieve.com/toptere/Codeforces.jpg', 'https://www.improgrammer.net/wp-content/uploads/2016/01/Codechef-logo.png', 'https://www.theindianwire.com/wp-content/uploads/2018/06/Topcoder-logo.jpg', 'https://cdn-images-1.medium.com/max/1600/1*FHJTiIW9_enNj4RWSQ3NEQ.png', 'http://www.iamwire.com/wp-content/uploads/2014/06/hackerrank_g7yq8.png', 'https://verticalplatform.kr/wp-content/uploads/2014/03/hackerearth-logo.png']

const onclick = async (index_no) => {
    console.log(`id is equal to ${id[index_no]}`);

    const response = await fetch(`https://clist.by/api/v1/contest/?username=amu629&api_key=cfdcf7a003520eb7deadb0d84875aa5c87ce75c2&resource__id=${id[index_no]}&start__gt=2019-12-15T03:07:43&order__by=start&limit=10&utf-8&application/json`);
    const responseJson = await response.json();
    console.log(responseJson.objects); 
    if(idcount[index_no] === 0){
      const modaltitle = document.querySelector(`#modal-title-${index_no}`);
      console.log(modaltitle);
      const img = document.createElement('div');
      img.style.width = '18rem';
      img.innerHTML = `<img class="card-img-top mx-auto" src="${logo[index_no]}" alt="Card image cap">`;
      modaltitle.appendChild(img);
      const modalbody = document.querySelector(`#modal-body-${index_no}`);
        const ul = document.createElement('ul');
        responseJson.objects.forEach( (elements) => {
          const li = document.createElement('li');
          li.innerHTML = `<b>${elements.event} : </b><i>Starts from </i>${elements.start} and <i>Ends at </i> ${elements.end} and the link of the contest is <a href = "${elements.href}">${elements.href}</a>`;
          ul.appendChild(li);
        });
          modalbody.appendChild(ul);
          idcount[index_no]++;
    }
    document.querySelector(`#real-${index_no}`).click();
}

const whenClickButton = async (e) => {
    console.log(e.target.id);
    let numbers = e.target.id.split('-');
    console.log(numbers[1]);
    const btn = document.querySelector(`#${e.target.id}`);
    console.log(btn);
    if(numbers[0] !== 'real'){
      onclick(numbers[1]);
    }
}

const fetchallsamplecard = () => {
    id.forEach( (value,index) => {
        
        const cards = document.createElement('div');
        cards.classList.add('col-sm-4');
        cards.innerHTML = `<!-- Sample card 1-->
          <div class="card" style="margin-bottom: 20px;">
            <div class="card-body">
              <h3 class="card-title">${idname[index]}</h3>
              <p class="card-text">
                Get all upcoming events/rounds on ${idname[index]} .
              </p>
            <!-- Button trigger modal -->
            <!-- Button = api call-->
              <button id = "btn-${index}" type="button" class="btn btn-primary">See Events</button>
              <button style = "display : none" id = "real-${index}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong-${index}">See Events</button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModalLong-${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      <div id = "modal-title-${index}"><b>${idname[index]}</b></div></h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div id="modal-body-${index}">
                      
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Button trigger modal -->
            </div>
          </div>
        </div>
      <!-- Sample card -->`
      rowclick.appendChild(cards);
    });
}
rowclick.addEventListener('click', whenClickButton);
