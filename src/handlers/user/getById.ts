import { Request, Response } from "express";
import { prisma } from "../../libs/prisma";
import ResponseError from "../../errors/response-error";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
      where: { id: id ? Number(id) : undefined },
    });

    if (!user) {
      throw new ResponseError(400, "User not found");
    }

    res.status(200).json({ data: user, message: "success" });
  } catch (error) {
    console.error("Error fetching user:", error);
    if (error instanceof ResponseError) {
      return res.status(error.status).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default getAllUsers;
