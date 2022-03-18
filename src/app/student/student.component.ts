import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'WEB207 - WE163030';
  subtitle = 'Bảng dữ liệu';


  students = [
    {
      id: 0,
      name:'vinh',
      age: 20,
      phone: '0336937090',
      email: 'vinhnnph17909@fpt.edu.vn',
      img: "https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg"
    },
    {
      id: 1,
      name:'long',
      age: 20,
      phone: '033632490',
      email: 'longph17911@fpt.edu.vn',
      img: "https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg"
    },
    {
      id: 2,
      name:'minh',
      age: 20,
      phone: '033632490',
      email: 'minhlvph17911@fpt.edu.vn',
      img: "https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg"
    },
    {
      id: 3,
      name:'linh',
      age: 20,
      phone: '033632490',
      email: 'linhlvph17911@fpt.edu.vn',
      img: "https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg"
    },
  ];

  remove(id :number) {
    this.filterStudents = this.filterStudents.filter(student => student.id !== id);
  }

  //search
  searchValue= '';
  // spread lấy tất cả các phẩn tử của student đưa vào 1 mảng mới và gắn cho filterStudents
  filterStudents = this.students;

  onSearch(event: any) {
    this.searchValue = event.target.value;

    // Neu gan cho chinh this.student
    // thi sau khi filter mang goc se thay doi
    // xoa filter se khong tra ve kq nua

    // Gan phan hien thi cho 1 mang moi
    // Su dung mang goc de filter
    this.filterStudents = this.students.filter(student => {
      // 1. Chuyen ca name va searchValue ve dang viet thuong bang toLowerCase
      // 2. voi searchValue tien hanh .trim() de loai bo khoang trang o 2 dau
      const studentNameLowerCase = student.name.toLowerCase();
      const searchValueLowerCase = this.searchValue.toLowerCase().trim();

      return studentNameLowerCase.indexOf(searchValueLowerCase) !== -1;
    }
    );
  }

  // Form input
  newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    email: '',
    img: ''
  };

  onChangeInput(event: any, key: string) {
    const inputValue = event.target.value;
    // spread operator
    this.newUser = {
      ...this.newUser,
      [key]: inputValue
    };

    console.log(this.newUser);
    /*
        ~ tao object moi ben trong co cac cap key value cua object this.newUser
        {
          name: '',
          age: null,
          phone: '',
          email: '',
          img: '',
          [key]: inputValue, neu key la 'name' tuong duong voi name: inputValue
          Voi cu phap spread ... thi name se bi ghi de gia tri moi tu '' => inputValue
        } */
  }


  onSubmit() {
    // Validate truoc khi cap nhat du lieu
    if (!this.onValidate(this.newUser)) {
      // Neu k pass qua dieu kien validate, thi se return ra khoi ham submit luon
      return;
    }

    // kiểm tra xem this.newUser có id không
    if (this.newUser.id) {
      // Nếu có id thì sẽ là công việc chỉnh sửa
      // Tìm xem đâu là phần tử có id là id đang chỉnh sửa
      for (let i = 0; i < this.students.length; i++) {
        // Kiểm tra phân tử nào có id trung với id của dữ liệu chỉnh sửa
        if (this.students[i].id === this.newUser.id) {
          // khi tìm thấy gắn gái trị cho phần tử đó
          this.students[i] = this.newUser;
        }
      }
    }else{
      // Công việc tạo mới
      // Nhet thang newUser vao mang this.student
      this.newUser = {
      ...this.newUser,
      id: this.students.length + 1,
      age: Number(this.newUser.age)
    };

    this.students.push(this.newUser);
    // Van de gap phai: neu filterStudents = [...this.students]
    // thi se khong cap nhat moi duoc
    }

    // Nhet thang newUser vao mang this.student
    this.newUser = {
      ...this.newUser,
      id: this.students.length + 1,
      age: Number(this.newUser.age)
    };

    this.students.push(this.newUser);
    // Van de gap phai: neu filterStudents = [...this.students]
    // thi se khong cap nhat moi duoc

    // Cap nhat du lieu default cho newUser de hien thi ben view
    this.newUser = {
      id: 0,
      name: '',
      age: 0,
      phone: '',
      email: '',
      img: ''
    }
  }

  // Validate
  onValidate(obj: any) {
    if (!obj.name || !obj.age || !obj.phone || !obj.img || !obj.email) {
      // ~ if(obj.name !== '' || obj.age !== '' ......)
      return false;
    }

    return true;
  }

  // Chỉnh sửa
  onEdit(student :any) {
    this.newUser = student;
  }

}
