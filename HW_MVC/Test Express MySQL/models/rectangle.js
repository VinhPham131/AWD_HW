
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getPerimeter() {
        return 2 * (this.height + this.width);
    }
    getArea() {
        return this.height * this.width;
    }
}


//Database 
const mysql = require('mysql2');														
														
// Tạo kết nối đến cơ sở dữ liệu MySQL														
const pool = mysql.createPool({														
    host: process.env.DB_HOST,														
    user: process.env.DB_USER,														
    password: process.env.DB_PASSWORD,														
    database: process.env.DB_NAME														
});														
														
// Hàm để lưu thông tin hình vuông vào MySQL														
const saveRectangleData = (height, width, perimeter, area) => {														
    return new Promise((resolve, reject) => {														
        const sql = 'INSERT INTO rectangles (height, width, perimeter, area) VALUES (?, ?, ?, ?)';														
        pool.query(sql, [height, width, perimeter, area], (err, results) => {														
            if (err) return reject(err);														
            resolve(results);														
            });														
        });														
    };														
		
    
module.exports =  {
    Rectangle,
    saveRectangleData
};
													