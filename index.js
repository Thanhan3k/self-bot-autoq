const express = require('express');
const { Client } = require('discord.js-selfbot-v13');

const app = express();
const PORT = process.env.PORT || 3000;

// Web server để lách gói miễn phí trên hosting
app.get('/', (req, res) => {
    res.send('Selfbot is running successfully!');
});

app.listen(PORT, () => {
    console.log(`Web server đang chạy tại cổng ${PORT}`);
});

// Khởi tạo selfbot
const client = new Client();

client.on('ready', async () => {
    console.log(`[Thành công] Đã đăng nhập vào tài khoản: ${client.user.tag}`);
    console.log('Selfbot đã sẵn sàng chạy ngầm!');
});

// Đăng nhập bằng Token từ biến môi trường trên Render
client.login(process.env.TOKEN).catch(err => {
    console.error('Lỗi đăng nhập Token:', err);
});
