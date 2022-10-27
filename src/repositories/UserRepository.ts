import { User } from ".prisma/client";
import BaseRepository from "./Base";

class UserRepository extends BaseRepository {
    async getUsers() {
        return this.fetchProtected(async () => {
            return await this.prisma.user.findMany({
                select: {
                    id: true,
                    email: true,
                    name: true
                }
            });
        });
    }

    async create(user: Omit<User, "id">) {
        return await this.fetchProtected(async () => {
            return await this.prisma.user.create({
                data: user,
                select: {
                    id: true,
                    email: true,
                    name: true
                }
            });
        });
    }

    async byEmail(email: string) {
        return await this.fetchProtected(async () => {
            return await this.prisma.user.findUnique({where: { email }});
        })
    }
}

export default UserRepository;