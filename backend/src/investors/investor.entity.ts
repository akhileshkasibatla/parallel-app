import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('investors')
export class Investor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'date_of_birth' })
  dateOfBirth: Date;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'street_address' })
  streetAddress: string;

  @Column()
  state: string;

  @Column()
  zipcode: string;

  @Column({ name: 'file_url', nullable: true })
  fileURL?: string;
}
