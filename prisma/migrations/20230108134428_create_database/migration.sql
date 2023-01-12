-- CreateTable
CREATE TABLE "Specialist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "fieldOfWorkId" INTEGER NOT NULL,
    "educationId" INTEGER NOT NULL,
    "profession" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Specialist_fieldOfWorkId_fkey" FOREIGN KEY ("fieldOfWorkId") REFERENCES "FieldOfWork" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Specialist_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Education" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FieldOfWork" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Substance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstSubstanceId" INTEGER NOT NULL,
    "secondSubstanceId" INTEGER NOT NULL,
    "recommendedId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "specialistId" INTEGER NOT NULL,
    CONSTRAINT "Post_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "Specialist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_firstSubstanceId_fkey" FOREIGN KEY ("firstSubstanceId") REFERENCES "Substance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_secondSubstanceId_fkey" FOREIGN KEY ("secondSubstanceId") REFERENCES "Substance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_recommendedId_fkey" FOREIGN KEY ("recommendedId") REFERENCES "Recommended" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Recommended" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Specialist_email_key" ON "Specialist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Specialist_mobile_key" ON "Specialist"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Specialist_fieldOfWorkId_educationId_key" ON "Specialist"("fieldOfWorkId", "educationId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_specialistId_firstSubstanceId_secondSubstanceId_recommendedId_key" ON "Post"("specialistId", "firstSubstanceId", "secondSubstanceId", "recommendedId");
