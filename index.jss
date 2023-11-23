body{
    margin: 0;
    background-color: #F2F2F2;
}

header{
    height: 75px;
    background-color: #181818;
}

.header-block{
    width: 95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
}

.logo {
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    margin: 0;
    color: #5CB8E4;
}

.navi {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #5CB8E4;
}

.contents{
    width: 80%;
    margin: 50px auto;
    font-family: 'Noto Sans JP', sans-serif;
}

.title{
    width: 100%;
}

.title p{
    margin: 0;
    font-weight: 900;
    font-size: 32px;
    color: #181818;
}

.title hr{
    border-top: 16px solid #8758FF;
}

.form {
    width: 90%;
    margin: 0 auto;
}

.form textarea{
    width: 100%;
    height: 250px
}

.form-textarea{
    display: block;
    width: 100%;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 0 1px #ccc inset;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    resize: vertical;
}

.form-textarea:focus{
    outline: 0;
    box-shadow: 0 0 0 2px #8758FF inset;
}

.btn-block {
    width:  120px;
    height: 50px;
    text-align: center;
    margin: 16px auto;
    background-color: #8758FF;
    border-radius: 25px;
}

.btn-block a {
    display: block;
}

.btn {
    width: 100%;
    color: #F2F2F2;
    text-decoration: none;
    display: block;
    padding: 12.5px 0px;
}
