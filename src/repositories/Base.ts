import { PrismaClient } from '@prisma/client'

class BaseRepository {
    protected prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient();
    }

    async disconnect() {
        await this.prisma.$disconnect();
    }

    protected async fetchProtected<T>(fetch: () => Promise<T>) {
        try {
            return await fetch();
        }
        catch(err) {
            await this.disconnect();
            console.error(err);
            process.exit(1);
        }
    }
}

export default BaseRepository;