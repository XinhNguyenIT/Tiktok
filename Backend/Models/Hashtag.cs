using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Hashtag
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public virtual ICollection<Post> Posts { get; set; } = new List<Post>();
}
