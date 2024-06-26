import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [DatePipe, CommonModule, RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  @Input() postData = {} as { id: string; data: Post };

  convertTimestampToDate(timestamp: Date): Date {
    if (timestamp instanceof Date) {
      return timestamp;
    }

    const { seconds, nanoseconds } = timestamp;
    return new Date(seconds * 1000 + nanoseconds / 1000000);
  }
}
