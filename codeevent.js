const onclick = async (id_no) => {
    const response = await fetch(`https://clist.by/api/v1/contest/?username=amu629&api_key=cfdcf7a003520eb7deadb0d84875aa5c87ce75c2&resource__id=${id_no}&start__gt=2019-12-15T03:07:43&order__by=start&limit=10&utf-8&application/json`);
    const responseJson = await response.json();
    console.log(responseJson);
}


const btn = document.querySelector('#btn-codeforces');
btn.addEventListener('click', () => onclick(1));
