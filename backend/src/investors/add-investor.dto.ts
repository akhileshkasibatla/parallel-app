import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddInvestor {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  dateOfBirth: string;

  @Field()
  phoneNumber: string;

  @Field()
  streetAddress: string;

  @Field()
  zipcode: string;
}
