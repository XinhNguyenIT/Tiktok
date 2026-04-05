using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Like
{
    public long Id { get; set; }

    public string UserId { get; set; } = null!;

    public long? PostId { get; set; }

    public long? CommentId { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual Comment? Comment { get; set; }

    public virtual Post? Post { get; set; }

    public virtual AspNetUser User { get; set; } = null!;
}
