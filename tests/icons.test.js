// const request = require("supertest");
// const app = require("../app"); // Ajusta el camino al archivo de tu app, si es diferente

// describe("Icons API", () => {
//   //* GET all Icons */
//   it("GET /icons - Debería obtener una lista de todos los íconos", async () => {
//     const response = await request(app).get("/icons");
//     expect(response.status).toBe(200);
//     expect(response.body).toBeInstanceOf(Array);
//   });

//   //*GET Icon by ID */
//   it("GET /icons/:id - Debería obtener un ícono por ID", async () => {
//     const iconId = 1; // Cambia esto a un ID válido en tu DB para hacer la prueba
//     const response = await request(app).get(`/icons/${iconId}`);
//     if (response.status === 200) {
//       expect(response.body).toHaveProperty("id", iconId);
//     } else {
//       expect(response.status).toBe(404); // En caso de que no exista
//     }
//   });

//   //** POST new Icon */
//   it("POST /icons - Debería crear un nuevo ícono", async () => {
//     const newIcon = {
//       name: "Test Icon",
//       icon_path: "/path/to/icon.png",
//       subcategoryId: 1, // Ajusta a un ID de subcategoría válido en tu DB
//     };

//     const response = await request(app).post("/icons").send(newIcon);
//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty("id");
//     expect(response.body.name).toBe(newIcon.name);
//   });

//   //**PUT (update) an Icon */
//   it("PUT /icons/:id - Debería actualizar un ícono existente", async () => {
//     const iconId = 1; // Cambia esto a un ID válido en tu DB
//     const updatedIcon = {
//       name: "Updated Icon Name",
//       icon_path: "/path/to/new_icon.png",
//       subcategoryId: 1, // Ajusta a un ID de subcategoría válido
//     };

//     const response = await request(app)
//       .put(`/icons/${iconId}`)
//       .send(updatedIcon);
//     if (response.status === 200) {
//       expect(response.body.name).toBe(updatedIcon.name);
//     } else {
//       expect(response.status).toBe(404); // Si el ícono no existe
//     }
//   });

//   //** DELETE Icon */
//   it("DELETE /icons/:id - Debería eliminar un ícono", async () => {
//     const iconId = 1; // Cambia esto a un ID válido en tu DB
//     const response = await request(app).delete(`/icons/${iconId}`);
//     if (response.status === 200) {
//       expect(response.body).toHaveProperty(
//         "message",
//         "Ícono eliminado correctamente"
//       );
//     } else {
//       expect(response.status).toBe(404); // Si el ícono no existe
//     }
//   });
// });
