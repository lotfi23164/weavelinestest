import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import * as session from "express-session"
import * as passport from "passport"
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(
    session({
      secret: "keyboard",
      resave: false,
      saveUninitialized: false,
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  const options = new DocumentBuilder()
  .setTitle('Conduit Blog API')
  .setDescription('Conduit blog api')
  .setVersion('4.5.0')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 4000);
}
bootstrap()