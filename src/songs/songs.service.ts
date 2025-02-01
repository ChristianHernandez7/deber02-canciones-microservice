import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  // Crear una nueva canción
  async create(song: Song): Promise<Song> {
    return this.songRepository.save(song);
  }

  // Obtener todas las canciones
  async findAll(): Promise<Song[]> {
    return this.songRepository.find();
  }

  // Obtener una canción por su ID
  async findOne(id_song: number): Promise<Song> {
    const song = await this.songRepository.findOne({ where: { id_song } });
    
    // Si no se encuentra la canción, lanzamos un error
    if (!song) {
      throw new Error(`Song with id ${id_song} not found`);
    }
    return song;
  }

  // Actualizar una canción
  async update(id_song: number, song: Partial<Song>): Promise<Song> {
    const existingSong = await this.songRepository.findOne({ where: { id_song } });

    // Si la canción no existe, lanzamos un error
    if (!existingSong) {
      throw new Error(`Song with id ${id_song} not found`);
    }

    // Actualizamos los campos de la canción existente
    this.songRepository.merge(existingSong, song);  // Fusiona la nueva data con la existente
    
    // Guardamos la canción actualizada y devolvemos la entidad actualizada
    return this.songRepository.save(existingSong); 
  }

  // Eliminar una canción
  async remove(id_song: number): Promise<void> {
    const song = await this.songRepository.findOne({ where: { id_song } });

    // Si no se encuentra la canción, lanzamos un error
    if (!song) {
      throw new Error(`Song with id ${id_song} not found`);
    }

    // Eliminamos la canción
    await this.songRepository.delete(id_song);
  }
}
