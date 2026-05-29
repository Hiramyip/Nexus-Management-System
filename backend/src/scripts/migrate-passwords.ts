import { sqlDb } from '../db.js';
import bcrypt from 'bcryptjs';

async function migratePasswords() {
  try {
    console.log('Iniciando migración de contraseñas...');
    
    // Obtener todos los usuarios
    const users = await sqlDb.$queryRaw`SELECT idUsuario, nombre, password_user FROM Usuarios`;
    
    let migrated = 0;
    let skipped = 0;
    
    for (const user of users as any[]) {
      const { idUsuario, nombre, password_user } = user;
      
      // Verificar si la contraseña ya está hasheada (bcrypt hashes empiezan con $2a$ o $2b$)
      if (password_user.startsWith('$2a$') || password_user.startsWith('$2b$')) {
        console.log(`Saltando usuario ${nombre} (ID: ${idUsuario}) - contraseña ya hasheada`);
        skipped++;
        continue;
      }
      
      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(password_user, 10);
      
      // Actualizar en la base de datos
      await sqlDb.$queryRaw`
        UPDATE Usuarios 
        SET password_user = ${hashedPassword} 
        WHERE idUsuario = ${idUsuario}
      `;
      
      console.log(`Migrado usuario ${nombre} (ID: ${idUsuario})`);
      migrated++;
    }
    
    console.log(`\nMigración completada:`);
    console.log(`- Usuarios migrados: ${migrated}`);
    console.log(`- Usuarios saltados (ya hasheados): ${skipped}`);
    
  } catch (error) {
    console.error('Error durante la migración:', error);
    process.exit(1);
  } finally {
    await sqlDb.$disconnect();
  }
}

migratePasswords();
