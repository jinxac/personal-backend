import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import baseConfig from './config/base-config';
import { validate } from './config/config-validation';
import ormConfig, { dbConfig } from './config/orm-config';
import { StrategyModule } from './strategy/strategy.module';
import { StockJournalModule } from './stock-journal/stock-journal.module';
import { PersonalJournalModule } from './personal-journal/personal-journal.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [baseConfig, ormConfig],
      validate,
    }),
    TypeOrmModule.forRoot(dbConfig),
    StrategyModule,
    StockJournalModule,
    PersonalJournalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
