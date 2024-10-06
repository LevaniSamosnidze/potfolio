// headers

const username_btn = document.getElementById('username_btn');
const head = document.getElementById('user_txt');
const p1 = document.getElementsByClassName('input_user_name')
const profile_img = document.getElementById('img');
const eror = document.getElementById('eror');
p = p1[0]


username_btn.addEventListener('click', () => {
    const username = document.createElement("input");
    username.type = "text";
    username.placeholder = "Enter your username";
    head.append(username);
    const b = document.createElement("button");
    b.textContent = "Submit";
    head.append(b);
    b.style.background = "pink";
    b.style.position = "relative";
    b.style.bottom = "30px";
    username.style.position = "relative";
    username.style.bottom = "30px"
    b.addEventListener("click", () => {
        p.textContent = username.value;
        username.remove();
        b.remove();
    })
});

profile_img.addEventListener('click', () => {
    const img_url = document.createElement("input");
    img_url.type = "text";
    img_url.placeholder = "Enter img url";
    head.append(img_url);
    
    const b1 = document.createElement("button");
    b1.textContent = "Submit";
    head.append(b1);
    b1.style.background = "pink";
    b1.style.position = "relative";
    b1.style.bottom = "30px";
    img_url.style.position = 'relative';
    img_url.style.bottom = "30px";
    b1.addEventListener("click", () => {
        if(img_url.value.slice(0, 5) !== 'https'){
            eror.textContent = "Error"
            img_url.remove();
            b1.remove();
        }else{
            profile_img.style.backgroundImage = "url('" + img_url.value + "')";
            img_url.remove();
            b1.remove();
            eror.textContent = "";
        }
    });
});


