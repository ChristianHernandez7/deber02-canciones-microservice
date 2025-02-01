import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Para cargar el archivo .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Usamos la variable de entorno
      autoLoadEntities: true,
      synchronize: true,
    }),
    SongsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
