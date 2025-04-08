import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule available globally
      envFilePath: '.env', // Specify the env file path if needed, otherwise reads process.env
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'), // Default to localhost if not set
        port: configService.get<number>('DB_PORT', 5432), // Default PostgreSQL port
        username: configService.get<string>('DB_USERNAME', 'postgres'), // Default user
        password: configService.get<string>('DB_PASSWORD', 'password'), // Default/example password
        database: configService.get<string>('DB_DATABASE', 'company_management'), // Default DB name
        entities: [], // We will add entities later
        autoLoadEntities: true, // Automatically load entities defined via forFeature()
        synchronize: true, // IMPORTANT: true only for development - creates DB schema automatically
        // synchronize: configService.get<string>('NODE_ENV') !== 'production', // Better approach
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
