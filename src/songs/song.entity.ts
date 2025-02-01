import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_song')  // El nombre de la tabla en la base de datos
export class Song {
  @PrimaryGeneratedColumn()  // Esto mapea la columna id_song
  id_song: number;

  @Column({ type: 'varchar', length: 50 })  // Mapea la columna song_name
  song_name: string;

  @Column({ type: 'varchar', length: 255 })  // Mapea la columna song_path
  song_path: string;

  @Column({ type: 'int', default: 0 })  // Mapea la columna plays
  plays: number;
}
