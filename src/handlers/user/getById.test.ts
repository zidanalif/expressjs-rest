import { Request, Response } from "express";
import { prismaMock } from "../../mock/prisma-mock";
import getUserById from "./getById";
import { User } from "@prisma/client";

describe("User Get By ID", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {
      params: { id: "1" },
    };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  it("should return user by id", async () => {
    // Arrange
    const userId = 1;
    const user = {
      id: userId,
      name: "John Doe",
      email: "johhndoea@gmail.com",
      createdAt: new Date(),
    };

    prismaMock.user.findUnique.mockResolvedValue(user as User);

    // Act
    await getUserById(req as Request, res as Response);

    // Assert
    expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      data: user,
      message: "success",
    });
  });

  it("should return 404 if user not found", async () => {
    // Arrange
    prismaMock.user.findUnique.mockResolvedValue(null);

    // Act
    await getUserById(req as Request, res as Response);

    // Assert
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "User not found",
    });
  });
});
