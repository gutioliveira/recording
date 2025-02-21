import { Module } from '@nestjs/common';
import { PrismaService } from '@src/persistance/prisma/prisma.service';
import { ContentController } from '@src/http/rest/controllers/content.controller';
import { ContentManagementService } from '@src/core/services/content-management.service';
import { MediaPlayerService } from '@src/core/services/media-player.service';

@Module({
  imports: [],
  controllers: [ContentController],
  providers: [PrismaService, ContentManagementService, MediaPlayerService],
})
export class AppModule {}
