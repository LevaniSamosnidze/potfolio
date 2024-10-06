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

const btn1 = document.getElementsByClassName("btn");

const btn = btn1[0];

const p_error = document.getElementById("error_p");

const name1 = document.getElementById("user_name");
const email = document.getElementById("user_email");
const subject = document.getElementById("user_subject");
const message = document.getElementById("user_message");

const user_name = document.getElementById("name");
const user_email = document.getElementById("email");
const user_subject = document.getElementById("subject");
const user_message = document.getElementById("message");
const tr = document.getElementById("tr");
const tbl = document.getElementById("tbl");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (user_name.value === "" || user_email.value === "" || user_subject.value === "" || user_message.value === "") {
        p_error.textContent = "Please fill in all fields";
        return;
    } else {
        p_error.textContent = "";

        if (!user_email.value.includes('@') || user_email.value.indexOf('@') === 0 || user_email.value.indexOf('@') === user_email.value.length - 1) {
            p_error.textContent = "Invalid email format";
            return;
        } else {
            p_error.textContent = "";

            const comp_name_tr = document.createElement("tr");

            const comp_name_td = document.createElement("td");
            comp_name_td.textContent = user_name.value;

            const comp_email_td = document.createElement("td");
            comp_email_td.textContent = user_email.value;

            comp_name_tr.appendChild(comp_name_td);
            comp_name_tr.appendChild(comp_email_td);
            tbl.appendChild(comp_name_tr);

            const comp_subject_td = document.createElement("td");
            comp_subject_td.textContent = user_subject.value;
            comp_name_tr.appendChild(comp_subject_td);

            const comp_message_td = document.createElement("td");
            comp_message_td.textContent = user_message.value;
            comp_name_tr.appendChild(comp_message_td);
            
        }
    }
});




