import pool from "../../../lib/db.js";



export async function POST(req) {
  console.log("📩 CONTACT API HIT");

  try {
    const { name, email, message } = await req.json();
    console.log("📦 BODY:", { name, email, message });

    // validation
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO contacts (name, email, message)
      VALUES ($1, $2, $3)
    `;

    await pool.query(query, [name, email, message]);

    return Response.json({ success: true });
  } catch (error) {
    console.error("❌ API ERROR:", error);

    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
