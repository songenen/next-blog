import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn, OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {Post} from './Post';
import {Comment} from './Comment';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column('varchar')
    username: string;
    @Column('varchar')
    passwordDigest: string;
    @CreateDateColumn()
    createAt: Date;
    @UpdateDateColumn()
    updateAt: Date;
    @OneToMany(type => Post, post => post.author)
    posts: Post[];
    @OneToMany(type => Comment, comment => comment.user)
    comments: Comment[]
}