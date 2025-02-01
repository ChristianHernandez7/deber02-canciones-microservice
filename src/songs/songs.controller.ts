import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SongService } from './songs.service';
import { Song } from './song.entity';

@Controller('songs')  // Define el endpoint base para las canciones
export class SongController {
  constructor(private readonly songService: SongService) {}

  // Crear una nueva canción
  @Post()
  async create(@Body() song: Song): Promise<Song> {
    return this.songService.create(song);
  }

  // Obtener todas las canciones
  @Get()
  async findAll(): Promise<Song[]> {
    return this.songService.findAll();
  }

  // Obtener una canción por su ID
  @Get(':id_song')
  async findOne(@Param('id_song') id_song: number): Promise<Song> {
    return this.songService.findOne(id_song);
  }

  // Actualizar una canción
  @Put(':id_song')
  async update(
    @Param('id_song') id_song: number,
    @Body() song: Partial<Song>,
  ): Promise<Song> {
    return this.songService.update(id_song, song);
  }

  // Eliminar una canción
  @Delete(':id_song')
  async remove(@Param('id_song') id_song: number): Promise<void> {
    return this.songService.remove(id_song);
  }
}
