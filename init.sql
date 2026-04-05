CREATE DATABASE IF NOT EXISTS tiktok_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE tiktok_db;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- =========================
-- ASP.NET CORE IDENTITY
-- =========================

CREATE TABLE AspNetRoles (
    Id VARCHAR(255) NOT NULL,
    Name VARCHAR(256) NULL,
    NormalizedName VARCHAR(256) NULL,
    ConcurrencyStamp LONGTEXT NULL,
    PRIMARY KEY (Id),
    UNIQUE KEY UK_AspNetRoles_NormalizedName (NormalizedName)
);

CREATE TABLE AspNetUsers (
    Id VARCHAR(255) NOT NULL,
    FullName VARCHAR(150) NOT NULL,
    UserName VARCHAR(256) NULL,
    NormalizedUserName VARCHAR(256) NULL,
    Email VARCHAR(256) NULL,
    NormalizedEmail VARCHAR(256) NULL,
    EmailConfirmed TINYINT(1) NOT NULL DEFAULT 0,
    PasswordHash LONGTEXT NULL,
    SecurityStamp LONGTEXT NULL,
    ConcurrencyStamp LONGTEXT NULL,
    PhoneNumber VARCHAR(20) NULL,
    PhoneNumberConfirmed TINYINT(1) NOT NULL DEFAULT 0,
    TwoFactorEnabled TINYINT(1) NOT NULL DEFAULT 0,
    LockoutEnd DATETIME NULL,
    LockoutEnabled TINYINT(1) NOT NULL DEFAULT 1,
    AccessFailedCount INT NOT NULL DEFAULT 0,
    AvatarUrl VARCHAR(500) NULL,
    Bio VARCHAR(500) NULL,
    DateOfBirth DATE NULL,
    Gender VARCHAR(20) NULL,
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (Id),
    UNIQUE KEY UK_AspNetUsers_NormalizedUserName (NormalizedUserName),
    UNIQUE KEY UK_AspNetUsers_NormalizedEmail (NormalizedEmail),
    UNIQUE KEY UK_AspNetUsers_PhoneNumber (PhoneNumber)
);

ALTER TABLE AspNetUsers
ADD CONSTRAINT UK_AspNetUsers_PhoneNumber UNIQUE (PhoneNumber);

CREATE TABLE AspNetUserRoles (
    UserId VARCHAR(255) NOT NULL,
    RoleId VARCHAR(255) NOT NULL,
    PRIMARY KEY (UserId, RoleId),
    CONSTRAINT FK_AspNetUserRoles_User FOREIGN KEY (UserId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE,
    CONSTRAINT FK_AspNetUserRoles_Role FOREIGN KEY (RoleId)
        REFERENCES AspNetRoles(Id) ON DELETE CASCADE
);

CREATE TABLE AspNetUserClaims (
    Id INT NOT NULL AUTO_INCREMENT,
    UserId VARCHAR(255) NOT NULL,
    ClaimType LONGTEXT NULL,
    ClaimValue LONGTEXT NULL,
    PRIMARY KEY (Id),
    CONSTRAINT FK_AspNetUserClaims_User FOREIGN KEY (UserId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE
);

CREATE TABLE AspNetRoleClaims (
    Id INT NOT NULL AUTO_INCREMENT,
    RoleId VARCHAR(255) NOT NULL,
    ClaimType LONGTEXT NULL,
    ClaimValue LONGTEXT NULL,
    PRIMARY KEY (Id),
    CONSTRAINT FK_AspNetRoleClaims_Role FOREIGN KEY (RoleId)
        REFERENCES AspNetRoles(Id) ON DELETE CASCADE
);

CREATE TABLE AspNetUserLogins (
    LoginProvider VARCHAR(255) NOT NULL,
    ProviderKey VARCHAR(255) NOT NULL,
    ProviderDisplayName LONGTEXT NULL,
    UserId VARCHAR(255) NOT NULL,
    PRIMARY KEY (LoginProvider, ProviderKey),
    CONSTRAINT FK_AspNetUserLogins_User FOREIGN KEY (UserId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE
);

CREATE TABLE AspNetUserTokens (
    UserId VARCHAR(255) NOT NULL,
    LoginProvider VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Value LONGTEXT NULL,
    PRIMARY KEY (UserId, LoginProvider, Name),
    CONSTRAINT FK_AspNetUserTokens_User FOREIGN KEY (UserId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE
);

-- =========================
-- DOMAIN TABLES
-- =========================

-- 1. Posts
CREATE TABLE Posts (
    Id BIGINT NOT NULL AUTO_INCREMENT,
    UserId VARCHAR(255) NOT NULL,
    Caption TEXT NULL,
    MediaUrl VARCHAR(500) NOT NULL,
    ThumbnailUrl VARCHAR(500) NULL,
    Privacy VARCHAR(20) NOT NULL DEFAULT 'Public',
    IsActive TINYINT(1) NOT NULL DEFAULT 1,
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (Id),
    CONSTRAINT FK_Posts_User FOREIGN KEY (UserId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE
);

-- 2. Comments
CREATE TABLE Comments (
    Id BIGINT NOT NULL AUTO_INCREMENT,
    PostId BIGINT NOT NULL,
    UserId VARCHAR(255) NOT NULL,
    ParentCommentId BIGINT NULL,
    Content VARCHAR(1000) NOT NULL,
    IsActive TINYINT(1) NOT NULL DEFAULT 1,
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (Id),
    CONSTRAINT FK_Comments_Post FOREIGN KEY (PostId)
        REFERENCES Posts(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Comments_User FOREIGN KEY (UserId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Comments_Parent FOREIGN KEY (ParentCommentId)
        REFERENCES Comments(Id) ON DELETE CASCADE
);

-- 3. Likes
CREATE TABLE Likes (
    Id BIGINT NOT NULL AUTO_INCREMENT,
    UserId VARCHAR(255) NOT NULL,
    PostId BIGINT NULL,
    CommentId BIGINT NULL,
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (Id),
    CONSTRAINT FK_Likes_User FOREIGN KEY (UserId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Likes_Post FOREIGN KEY (PostId)
        REFERENCES Posts(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Likes_Comment FOREIGN KEY (CommentId)
        REFERENCES Comments(Id) ON DELETE CASCADE,
    CONSTRAINT CK_Likes_Target CHECK (
        (PostId IS NOT NULL AND CommentId IS NULL)
        OR
        (PostId IS NULL AND CommentId IS NOT NULL)
    )
);

-- 4. Friendships
CREATE TABLE Friendships (
    Id BIGINT NOT NULL AUTO_INCREMENT,
    RequesterId VARCHAR(255) NOT NULL,
    AddresseeId VARCHAR(255) NOT NULL,
    Status VARCHAR(20) NOT NULL DEFAULT 'Pending',
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    RespondedAt DATETIME NULL,
    PRIMARY KEY (Id),
    CONSTRAINT FK_Friendships_Requester FOREIGN KEY (RequesterId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Friendships_Addressee FOREIGN KEY (AddresseeId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE,
    CONSTRAINT UK_Friendships UNIQUE (RequesterId, AddresseeId),
    CONSTRAINT CK_Friendships_NotSelf CHECK (RequesterId <> AddresseeId)
);

-- 5. Stories
CREATE TABLE Stories (
    Id BIGINT NOT NULL AUTO_INCREMENT,
    UserId VARCHAR(255) NOT NULL,
    MediaUrl VARCHAR(500) NOT NULL,
    Caption VARCHAR(500) NULL,
    ExpiresAt DATETIME NOT NULL,
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (Id),
    CONSTRAINT FK_Stories_User FOREIGN KEY (UserId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE
);

-- 6. Notifications
CREATE TABLE Notifications (
    Id BIGINT NOT NULL AUTO_INCREMENT,
    UserId VARCHAR(255) NOT NULL,          -- người nhận
    ActorId VARCHAR(255) NULL,             -- người tạo hành động
    Type VARCHAR(50) NOT NULL,             -- LikePost, CommentPost, FriendRequest...
    ReferenceId BIGINT NULL,               -- PostId/CommentId/StoryId...
    Message VARCHAR(500) NOT NULL,
    IsRead TINYINT(1) NOT NULL DEFAULT 0,
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (Id),
    CONSTRAINT FK_Notifications_User FOREIGN KEY (UserId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Notifications_Actor FOREIGN KEY (ActorId)
        REFERENCES AspNetUsers(Id) ON DELETE SET NULL
);

-- 7. Hashtags
CREATE TABLE Hashtags (
    Id BIGINT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (Id),
    UNIQUE KEY UK_Hashtags_Name (Name)
);

-- 8. PostHashtags (Many-to-Many)
CREATE TABLE PostHashtags (
    PostId BIGINT NOT NULL,
    HashtagId BIGINT NOT NULL,
    PRIMARY KEY (PostId, HashtagId),
    CONSTRAINT FK_PostHashtags_Post FOREIGN KEY (PostId)
        REFERENCES Posts(Id) ON DELETE CASCADE,
    CONSTRAINT FK_PostHashtags_Hashtag FOREIGN KEY (HashtagId)
        REFERENCES Hashtags(Id) ON DELETE CASCADE
);

-- 9. PostReports
CREATE TABLE PostReports (
    Id BIGINT NOT NULL AUTO_INCREMENT,
    PostId BIGINT NOT NULL,
    ReporterId VARCHAR(255) NOT NULL,
    Reason VARCHAR(255) NOT NULL,
    Description VARCHAR(1000) NULL,
    Status VARCHAR(20) NOT NULL DEFAULT 'Pending',
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (Id),
    CONSTRAINT FK_PostReports_Post FOREIGN KEY (PostId)
        REFERENCES Posts(Id) ON DELETE CASCADE,
    CONSTRAINT FK_PostReports_Reporter FOREIGN KEY (ReporterId)
        REFERENCES AspNetUsers(Id) ON DELETE CASCADE
);

-- =========================
-- INDEXES
-- =========================

CREATE INDEX IX_Posts_UserId ON Posts(UserId);
CREATE INDEX IX_Comments_PostId ON Comments(PostId);
CREATE INDEX IX_Comments_UserId ON Comments(UserId);
CREATE INDEX IX_Likes_UserId ON Likes(UserId);
CREATE INDEX IX_Likes_PostId ON Likes(PostId);
CREATE INDEX IX_Likes_CommentId ON Likes(CommentId);
CREATE INDEX IX_Friendships_RequesterId ON Friendships(RequesterId);
CREATE INDEX IX_Friendships_AddresseeId ON Friendships(AddresseeId);
CREATE INDEX IX_Stories_UserId ON Stories(UserId);
CREATE INDEX IX_Notifications_UserId ON Notifications(UserId);
CREATE INDEX IX_PostReports_PostId ON PostReports(PostId);

-- =========================
-- SEED DATA
-- =========================

INSERT INTO AspNetRoles (Id, Name, NormalizedName, ConcurrencyStamp)
VALUES
('role-user', 'User', 'USER', UUID()),
('role-admin', 'Admin', 'ADMIN', UUID());

INSERT INTO AspNetUsers (
    Id, FullName, UserName, NormalizedUserName, Email, NormalizedEmail,
    EmailConfirmed, PasswordHash, SecurityStamp, ConcurrencyStamp,
    AvatarUrl, Bio
)
VALUES
('user-001', 'Admin User', 'admin', 'ADMIN', 'admin@tiktok.com', 'ADMIN@TIKTOK.COM',
 1, 'HASHED_PASSWORD', UUID(), UUID(),
 'https://example.com/avatar-admin.jpg', 'System administrator'),
('user-002', 'Nguyen Van A', 'nguyenvana', 'NGUYENVANA', 'a@tiktok.com', 'A@TIKTOK.COM',
 1, 'HASHED_PASSWORD', UUID(), UUID(),
 'https://example.com/avatar-a.jpg', 'Hello TikTok'),
('user-003', 'Tran Thi B', 'tranthib', 'TRANTHIB', 'b@tiktok.com', 'B@TIKTOK.COM',
 1, 'HASHED_PASSWORD', UUID(), UUID(),
 'https://example.com/avatar-b.jpg', 'Content creator');

INSERT INTO AspNetUserRoles (UserId, RoleId)
VALUES
('user-001', 'role-admin'),
('user-002', 'role-user'),
('user-003', 'role-user');

INSERT INTO Posts (UserId, Caption, MediaUrl, ThumbnailUrl, Privacy)
VALUES
('user-002', 'My first post #fun #travel', 'https://example.com/videos/video1.mp4', 'https://example.com/thumbs/thumb1.jpg', 'Public'),
('user-003', 'A beautiful day #nature', 'https://example.com/videos/video2.mp4', 'https://example.com/thumbs/thumb2.jpg', 'Public');

INSERT INTO Comments (PostId, UserId, Content)
VALUES
(1, 'user-003', 'Great video!'),
(2, 'user-002', 'Amazing!');

INSERT INTO Likes (UserId, PostId)
VALUES
('user-003', 1),
('user-002', 2);

INSERT INTO Friendships (RequesterId, AddresseeId, Status, RespondedAt)
VALUES
('user-002', 'user-003', 'Accepted', NOW());

INSERT INTO Stories (UserId, MediaUrl, Caption, ExpiresAt)
VALUES
('user-002', 'https://example.com/stories/story1.jpg', 'Good morning', DATE_ADD(NOW(), INTERVAL 24 HOUR)),
('user-003', 'https://example.com/stories/story2.jpg', 'New day', DATE_ADD(NOW(), INTERVAL 24 HOUR));

INSERT INTO Notifications (UserId, ActorId, Type, ReferenceId, Message)
VALUES
('user-002', 'user-003', 'LikePost', 1, 'Tran Thi B liked your post'),
('user-003', 'user-002', 'CommentPost', 2, 'Nguyen Van A commented on your post');

INSERT INTO Hashtags (Name)
VALUES
('fun'),
('travel'),
('nature');

INSERT INTO PostHashtags (PostId, HashtagId)
VALUES
(1, 1),
(1, 2),
(2, 3);

INSERT INTO PostReports (PostId, ReporterId, Reason, Description, Status)
VALUES
(1, 'user-003', 'Spam', 'This post looks suspicious', 'Pending');

SET FOREIGN_KEY_CHECKS = 1;