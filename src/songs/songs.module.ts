import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongService } from './songs.service';
import { SongController } from './songs.controller';
import { Song } from './song.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongsModule {}
