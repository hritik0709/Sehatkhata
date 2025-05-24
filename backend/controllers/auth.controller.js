import bcrypt from "bcryptjs";
import sql_db from "../db/sql.js";

export const register = async ( req , res ) => {
    console.log( req.body)
    const { username , email , password , role , full_name , phone_number , address } = req.body;

    try {
        if ( !username || !email || !password || !role || !full_name || !phone_number || !address ) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash( password , salt );

        const [ result ] = await sql_db.execute(`
            INSERT INTO users ( username , email , password , role , full_name , phone_number , address )
            VALUES ( '${username}' , '${email}' , '${hashedPassword}' , '${role}' , '${full_name}' , '${phone_number}' , '${address}' )
        `);

        res.status(200).json({ message: "User registered successfully!" , result });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
}


export const login = async ( req , res ) => {
    const { email , password } = req.body;
    try {
        if ( !email || !password ) {
            return res.status
        }

        const newPassword = await bcrypt.hash( password , salt );

        const hashedPassword = await sql_db.execute(`
            SELECT password FROM users WHERE email = '${email}'
        `);

        console.log( newPassword , hashedPassword );
        
        if ( newPassword != hashedPassword ) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        res.status(200).json({ message: "User logged in successfully!" });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
}