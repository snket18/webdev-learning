import { PrismaClient } from "@prisma/client"; // same as import moongoose from mongoose
const client = new PrismaClient();
async function createUser() {
    await client.user.create({
        data: {
            username: "sanket",
            passowrd: "123123",
            city: "delhi",
            pincode: "123123",
        }
    });
}
createUser();
//# sourceMappingURL=index.js.map