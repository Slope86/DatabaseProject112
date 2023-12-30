# Fit Lohas 健身課程管理系統

## How to Run the Project

1. **Install and Run Frontend**

    ```bash
    # Clone the project
    git clone --depth 1 https://github.com/Slope86/DatabaseProject112
    cd DatabaseProject112
    
    # Install dependencies
    yarn
    
    # Run the project
    yarn start
    ```

    This will clone the project, install the required dependencies using yarn, and start the frontend application.

2. **Install and Run Backend**

    Ensure the backend from the [DatabaseProject112Backend](https://github.com/Slope86/DatabaseProject112Backend) repository is installed and running.

## Project Description

1. **Background of the Database Application**

    In response to society's increased focus on health and fitness, the number of gym-goers and registrations for fitness courses has risen. To manage various interrelated and complex data, an efficient system is necessary.

    This database system is designed to manage the day-to-day operations of a fitness center and fitness courses. It includes functionalities such as user registration information, gym equipment management, course schedules, instructor details and scheduling, member subscriptions, etc. Users can register, book courses, check equipment status, and view course schedules, among other features.

2. **Useful Queries for this Database Application**

    - **User register**: Register to be a member.
    - **User profile**: Members can edit their personal information, including address, phone number, and other details, ensuring accurate and current profiles.
    - **Search for specific courses**: Search for available fitness courses based on the course name or category.
    - **Sign up for a course**: Members can sign up for the course they want to participate in.
    - **Modify course information**: Make changes to course details in response to any modifications.

3. **Database Schema Overview**

    ```sql
    users (
        UserID INT AUTO_INCREMENT PRIMARY KEY,
        Username VARCHAR(50) NOT NULL,
        Email VARCHAR(100) UNIQUE NOT NULL,
        PasswordHash VARCHAR(200) NOT NULL,
        AvatarPath VARCHAR(200) DEFAULT '/assets/images/avatars/000-default.png ',
        FullName VARCHAR(100),
        UserRole VARCHAR(50) DEFAULT 'STUDENT',
        PhoneNumber VARCHAR(20),
        Address VARCHAR(200),
        Gender ENUM('Male', 'Female', 'Other'),
        CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        ModifyDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )

    teachers (
        TeacherID INT AUTO_INCREMENT PRIMARY KEY,
        UserID INT,
        Salary DECIMAL(10, 2),
        CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        ModifyDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (UserID) REFERENCES users(UserID)
    )

    courses (
        CourseID INT AUTO_INCREMENT PRIMARY KEY,
        CourseName VARCHAR(100) NOT NULL,
        CourseDescription VARCHAR(200) NOT NULL,
        Category VARCHAR(50),
        TeacherID INT,
        CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        ModifyDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (TeacherID) REFERENCES teachers(TeacherID)
    )

    CourseEnter (
        CourseID INT,
        UserID INT,
        CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        ModifyDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (CourseID) REFERENCES courses(CourseID),
        FOREIGN KEY (UserID) REFERENCES users(UserID),
        PRIMARY KEY (CourseID, UserID)
    )
    ```

## Contributing

Feel free to contribute by creating issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE.md).