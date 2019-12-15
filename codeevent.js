// const onclick = async (id_no) => {
//     const response = await fetch(`https://clist.by/api/v1/contest/?username=amu629&api_key=cfdcf7a003520eb7deadb0d84875aa5c87ce75c2&resource__id=${id_no}&start__gt=2019-12-15T03:07:43&order__by=start&limit=10&utf-8&application/json`);
//     const responseJson = await response.json();
//     console.log(responseJson);
// }
const rowclick = document.querySelector('.row');
const id = [1,2,12,35,63,73];
const idname = ['codeforces', 'codechef', 'topcoder', 'google-code-comp', 'hackerrank', 'hackerearth'];
// const btn = document.querySelector(`#btn-${num}`);
// btn.addEventListener('click', () => onclick(num));

const whenClickButton = (e) => {
    console.log(e.target.id);
}

const fetchallsamplecard = () => {
    id.forEach( (value,index) => {
        
        // <div class="col-sm-4">
        const cards = document.createElement('div');
        cards.classList.add('col-sm-4');
        cards.innerHTML = `<!-- Sample card 1-->
          <div class="card" style="margin-bottom: 20px;">
            <div class="card-body">
              <h3 class="card-title">${idname[index]}</h3>
              <p class="card-text">
                Get all the upcoming events/rounds on Codeforces .
              </p>
            <!-- Button trigger modal -->
              <button id = "1" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
              Launch demo modal
              </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="modal-1">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    text here is inserted

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
    })
}



rowclick.addEventListener('click', whenClickButton)
