# 健身課程管理系統

## Project Descriptions

1. The background of this database application:
隨著社會對健康和健身的重視，使用健生房及報名健身課程的客戶也隨之增加，為了維護各種交互相關的複雜資料，故需要一個有效率的系統來做相關的管理。

    此資料庫系統旨在管理健身房的日常運作和健身課程。它包括用戶註冊資訊、健身器材管理、課程時間表、教練資料及排班、會員訂閱等功能。使用者可以註冊、預訂課程、查看器材狀態、查看課程時間表等。

2. Useful queries for this database application:
    - 搜尋特定課程：根據課程名稱或類別搜尋可用的健身課程。
    - 會員資訊查詢：查詢會員的註冊訊息、課程情況等等。
    - 教練排班表：顯示教練的工作時間表和所負責的課程。
    - 場地借用：查詢場地是否已被借用。
    - 會員報名課程：會員提交課程的報名申請。

3. ER diagram for the database application:

    Userdata (UPID ，username，phonenumber，sex，createdDate，modifyDate)

    Teacher(TID，name，createdDate，modifyDate)

    Location(LSID，title，createdDate，modifyDate)

    Course(CCID，LSID，TID，createdDate，modifyDate)

    CourseDate(CCDID，CCID，courseDate，createdDate，modifyDate)

    CourseEnter(CCEID，CCID，UPID，is_Active，createdDate，modifyDate)

    學員/教師 透過 Userdata / Teacher 建立基本資料。Course用於建立課程資料，其中有Location 場地資訊、Teacher教練資訊及 CourseDate 的上課日期。CourseEnter用於紀錄學員的報課資訊。
